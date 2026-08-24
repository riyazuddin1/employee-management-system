import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../service/AuthContext";
import "./navbar.css";

const NavbarComp = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link
          to="/"
          className="navbar-brand"
        >
          Employee<span>Hub</span>
        </Link>

        <div className="navbar-links">

          {!isAuthenticated ? (
            <>
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/login" className="nav-link">
                Login
              </Link>

              <Link to="/register" className="nav-link nav-register">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/viewEmp" className="nav-link">
                Dashboard
              </Link>

              <Link to="/addEmp" className="nav-link">
                Add Employee
              </Link>

              <Link to="/profile" className="nav-link">
                Profile
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;