import React, {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(
    () =>
      localStorage.getItem("isAuthenticated") === "true"
  );

  const [username, setUsername] = useState(
    () =>
      localStorage.getItem("username") || ""
  );

  const login = (loggedInUsername) => {

    setIsAuthenticated(true);
    setUsername(loggedInUsername);

    localStorage.setItem(
      "isAuthenticated",
      "true"
    );

    localStorage.setItem(
      "username",
      loggedInUsername
    );
  };

  const logout = () => {

    setIsAuthenticated(false);
    setUsername("");

    localStorage.removeItem(
      "isAuthenticated"
    );

    localStorage.removeItem(
      "username"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};