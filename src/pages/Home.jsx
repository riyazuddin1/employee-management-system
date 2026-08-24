import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="home-content">

          <span className="home-badge">
            EMPLOYEE MANAGEMENT PLATFORM
          </span>

          <h1>
            Manage your workforce
            <span> smarter.</span>
          </h1>

          <p>
            EmployeeHub is a simple and powerful employee management
            platform to organize employee information, manage records,
            and keep everything in one place.
          </p>

          <div className="home-actions">
            <button
              className="primary-btn"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>

        </div>

        <div className="home-visual">

          <div className="home-dashboard-card">

            <div className="mini-card-header">
              <span>EmployeeHub</span>
              <span className="mini-status">● Live</span>
            </div>

            <div className="mini-stat-row">

              <div className="mini-stat">
                <span>Employees</span>
                <strong>100+</strong>
              </div>

              <div className="mini-stat">
                <span>Departments</span>
                <strong>12</strong>
              </div>

            </div>

            <div className="mini-chart">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="mini-list">

              <div>
                <span className="mini-avatar">A</span>
                <span>Employee Management</span>
              </div>

              <div>
                <span className="mini-avatar">S</span>
                <span>Secure Authentication</span>
              </div>

              <div>
                <span className="mini-avatar">R</span>
                <span>Real-time Records</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="home-features">

        <div className="feature-card">
          <div className="feature-icon">01</div>
          <h3>Employee Management</h3>
          <p>
            Add, view, update and remove employee
            records with ease.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">02</div>
          <h3>Secure Access</h3>
          <p>
            Authentication keeps employee information
            accessible to authorized users.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">03</div>
          <h3>Centralized Dashboard</h3>
          <p>
            Manage your employee directory from
            one organized workspace.
          </p>
        </div>

      </section>

    </main>
  );
};

export default Home;