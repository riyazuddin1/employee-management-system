import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import { useAuth } from "../service/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!username.trim() || !password) {
      toast.error(
        "Please enter your username and password."
      );
      return;
    }

    try {

      setLoading(true);

      const response = await axiosInstance.post(
        "http://localhost:8085/login",
        {
          username: username.trim(),
          password,
        }
      );

      if (response.status === 200) {

        login(username.trim());

        toast.success(
          "Login successful! Welcome back."
        );

        setTimeout(() => {
          navigate("/");
        }, 700);
      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Invalid username or password."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-brand">

          <div className="auth-logo">
            EH
          </div>

          <div>
            <h1>Welcome back</h1>

            <p>
              Sign in to your EmployeeHub account
            </p>
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="auth-form"
        >

          <div className="form-group">

            <label htmlFor="username">
              Username
            </label>

            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              autoComplete="username"
            />

          </div>

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete="current-password"
            />

          </div>

          <button
            type="submit"
            className="primary-btn auth-submit"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>

        </form>

        <p className="auth-footer">

          Don't have an account?{" "}

          <button
            type="button"
            className="auth-link"
            onClick={() =>
              navigate("/register")
            }
          >
            Create an account
          </button>

        </p>

      </div>

    </main>
  );
};

export default Login;