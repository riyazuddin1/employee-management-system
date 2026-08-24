import React from "react";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewEmployee from "./pages/ViewEmployee";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import { ToastContainer } from "react-toastify";
import ViewIndividualEmp from "./pages/ViewIndividualEmp";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { AuthProvider } from "./service/AuthContext";
import ProtectedRoutes from "./service/ProtectedRoutes";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <NavbarComp />

        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <ViewEmployee />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/addEmp"
            element={
              <ProtectedRoutes>
                <AddEmployee />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/updateEmp/:eid"
            element={
              <ProtectedRoutes>
                <UpdateEmployee />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/viewEmp/:vid"
            element={
              <ProtectedRoutes>
                <ViewIndividualEmp />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
