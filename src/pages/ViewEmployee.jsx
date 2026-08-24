import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import { toast } from "react-toastify";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchEmployee = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        "http://localhost:8085/getEmployees"
      );
      setEmployee(response.data);
    } catch (error) {
      toast.error("Unable to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const deleteEmployee = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) return;

    try {
      await axiosInstance.delete(
        "http://localhost:8085/deleteEmp/" + id
      );

      toast.success("Employee deleted successfully");
      fetchEmployee();
    } catch (error) {
      toast.error("Employee could not be deleted");
    }
  };

  const loadEdit = (id) => {
    navigate(`/updateEmp/${id}`);
  };

  const viewIndEmp = (id) => {
    navigate(`/viewEmp/${id}`);
  };

  const departments = [
    ...new Set(employee.map((emp) => emp.dept).filter(Boolean)),
  ];

  return (
    <main className="dashboard-page">

      {/* Hero Section */}
      <section className="dashboard-hero">
        <div>
          <span className="dashboard-eyebrow">
            EMPLOYEE MANAGEMENT
          </span>

          <h1>Employee Dashboard</h1>

          <p>
            Manage your organization's employees, departments,
            and records from one place.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("/addEmp")}
        >
          + Add Employee
        </button>
      </section>

      {/* Statistics */}
      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div>
            <span>Total Employees</span>
            <strong>{employee.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏢</div>
          <div>
            <span>Departments</span>
            <strong>{departments.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div>
            <span>System Status</span>
            <strong className="status-active">Active</strong>
          </div>
        </div>

      </section>

      {/* Employee Directory */}
      <section className="employee-section">

        <div className="section-heading">
          <div>
            <h2>Employee Directory</h2>
            <p>
              View and manage all registered employees.
            </p>
          </div>

          <span className="employee-count">
            {employee.length} {employee.length === 1 ? "Employee" : "Employees"}
          </span>
        </div>

        {loading ? (
          <div className="empty-state">
            <div className="loader"></div>
            <p>Loading employees...</p>
          </div>
        ) : employee.length > 0 ? (

          <div className="table-wrapper">
            <table className="employee-table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {employee.map((emp) => (
                  <tr key={emp.id}>

                    <td>
                      <span className="employee-id">
                        #{emp.id}
                      </span>
                    </td>

                    <td>
                      <div className="employee-name">
                        <div className="avatar">
                          {emp.name?.charAt(0)?.toUpperCase()}
                        </div>

                        <span>{emp.name}</span>
                      </div>
                    </td>

                    <td>{emp.age}</td>

                    <td>
                      <span className="department-badge">
                        {emp.dept}
                      </span>
                    </td>

                    <td>
                      <div className="action-buttons">

                        <button
                          className="action-btn view-btn"
                          onClick={() => viewIndEmp(emp.id)}
                        >
                          View
                        </button>

                        <button
                          className="action-btn edit-btn"
                          onClick={() => loadEdit(emp.id)}
                        >
                          Edit
                        </button>

                        <button
                          className="action-btn delete-btn"
                          onClick={() => deleteEmployee(emp.id)}
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        ) : (

          <div className="empty-state">
            <div className="empty-icon">👥</div>
            <h3>No employees yet</h3>
            <p>
              Add your first employee to start managing your directory.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/addEmp")}
            >
              + Add Employee
            </button>
          </div>

        )}

      </section>

    </main>
  );
};

export default ViewEmployee;