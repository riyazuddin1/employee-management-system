import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import { toast } from "react-toastify";

const ViewIndividualEmp = () => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { vid } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);

        const response = await axiosInstance.get(
          `http://localhost:8085/getEmpById/${vid}`
        );

        setEmployee(response.data);
      } catch (error) {
        toast.error("Unable to load employee details.");

        setTimeout(() => {
          navigate("/");
        }, 800);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [vid, navigate]);

  if (loading) {
    return (
      <main className="employee-details-page">
        <div className="details-loading">
          <div className="loader"></div>
          <p>Loading employee details...</p>
        </div>
      </main>
    );
  }

  if (!employee) {
    return (
      <main className="employee-details-page">
        <div className="details-card">
          <div className="details-empty-icon">!</div>

          <h2>Employee not found</h2>

          <p>
            We couldn't find the employee you're looking for.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/")}
          >
            Back to Directory
          </button>
        </div>
      </main>
    );
  }

  const initial =
    employee.name?.charAt(0)?.toUpperCase() || "E";

  return (
    <main className="employee-details-page">

      <div className="details-topbar">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Directory
        </button>

      </div>

      <section className="details-card">

        <div className="details-header">

          <div className="details-avatar">
            {initial}
          </div>

          <div className="details-title">

            <span className="dashboard-eyebrow">
              EMPLOYEE PROFILE
            </span>

            <h1>{employee.name}</h1>

            <p>
              Employee #{employee.id}
            </p>

          </div>

          <button
            className="primary-btn details-edit-btn"
            onClick={() =>
              navigate(`/updateEmp/${employee.id}`)
            }
          >
            Edit Employee
          </button>

        </div>

        <div className="details-status">
          <span className="status-dot"></span>
          Active Employee
        </div>

        <div className="profile-divider"></div>

        <div className="employee-info-grid">

          <div className="employee-info-item">

            <span>Employee ID</span>

            <strong>
              #{employee.id}
            </strong>

          </div>

          <div className="employee-info-item">

            <span>Full Name</span>

            <strong>
              {employee.name}
            </strong>

          </div>

          <div className="employee-info-item">

            <span>Age</span>

            <strong>
              {employee.age} years
            </strong>

          </div>

          <div className="employee-info-item">

            <span>Department</span>

            <strong>
              <span className="department-badge">
                {employee.dept}
              </span>
            </strong>

          </div>

        </div>

        <div className="details-footer">

          <button
            className="secondary-btn"
            onClick={() => navigate("/")}
          >
            Back to Employees
          </button>

          <button
            className="primary-btn"
            onClick={() =>
              navigate(`/updateEmp/${employee.id}`)
            }
          >
            Edit Information
          </button>

        </div>

      </section>

    </main>
  );
};

export default ViewIndividualEmp;