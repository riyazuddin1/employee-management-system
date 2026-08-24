import React, { useEffect, useState } from "react";
import { useAuth } from "../service/AuthContext";
import axiosInstance from "../service/axiosInstance";
import { toast } from "react-toastify";

const Profile = () => {

  const { username } = useAuth();

  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const fetchProfile = async () => {

    try {

      setLoading(true);

      const response =
        await axiosInstance.get(
          `https://employee-management-backend-o65d.onrender.com/profile/${username}`
        );

      setProfile(response.data);

      setFormData({
        firstName:
          response.data.firstName || "",

        lastName:
          response.data.lastName || "",
      });

    } catch (error) {

      toast.error(
        "Unable to load your profile."
      );

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    if (username) {
      fetchProfile();
    }

  }, [username]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim()
    ) {

      toast.error(
        "Please complete all profile fields."
      );

      return;
    }

    try {

      setSaving(true);

      const response =
        await axiosInstance.put(
          `https://employee-management-backend-o65d.onrender.com/profile/${username}`,
          {
            firstName:
              formData.firstName.trim(),

            lastName:
              formData.lastName.trim(),
          }
        );

      toast.success(
        response.data.message ||
        "Profile updated successfully."
      );

      setProfile({
        ...profile,

        firstName:
          formData.firstName.trim(),

        lastName:
          formData.lastName.trim(),
      });

      setEditing(false);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to update profile."
      );

    } finally {

      setSaving(false);
    }
  };

  if (loading) {

    return (
      <main className="profile-page">

        <div className="profile-loading">

          <div className="loader"></div>

          <p>
            Loading profile...
          </p>

        </div>

      </main>
    );
  }

  if (!profile) {

    return (
      <main className="profile-page">

        <div className="profile-card">

          <h2>
            Profile unavailable
          </h2>

          <p>
            We couldn't load your account
            information.
          </p>

        </div>

      </main>
    );
  }

  const initials =
    `${profile.firstName?.charAt(0) || ""}
     ${profile.lastName?.charAt(0) || ""}`
      .replace(/\s/g, "")
      .toUpperCase();

  return (
    <main className="profile-page">

      <section className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {initials || "EH"}
          </div>

          <div className="profile-heading">

            <span className="dashboard-eyebrow">
              MY ACCOUNT
            </span>

            <h1>
              {profile.firstName}{" "}
              {profile.lastName}
            </h1>

            <p>
              @{profile.username}
            </p>

          </div>

          {!editing && (
            <button
              className="primary-btn profile-edit-btn"
              onClick={() =>
                setEditing(true)
              }
            >
              Edit Profile
            </button>
          )}

        </div>

        <div className="profile-status">

          <span className="status-dot"></span>

          Account Active

        </div>

        <div className="profile-divider"></div>

        {!editing ? (

          <div className="profile-details">

            <div className="profile-detail">

              <span>
                First Name
              </span>

              <strong>
                {profile.firstName}
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                Last Name
              </span>

              <strong>
                {profile.lastName}
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                Username
              </span>

              <strong>
                {profile.username}
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                Account Status
              </span>

              <strong className="profile-active">
                Active
              </strong>

            </div>

          </div>

        ) : (

          <form
            className="profile-edit-form"
            onSubmit={handleUpdate}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="profile-firstName">
                  First Name
                </label>

                <input
                  id="profile-firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label htmlFor="profile-lastName">
                  Last Name
                </label>

                <input
                  id="profile-lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="form-group">

              <label htmlFor="profile-username">
                Username
              </label>

              <input
                id="profile-username"
                type="text"
                value={profile.username}
                disabled
              />

              <small className="field-help">
                Username is linked to your account
                and cannot be changed.
              </small>

            </div>

            <div className="profile-actions">

              <button
                type="button"
                className="secondary-btn"
                onClick={() => {

                  setEditing(false);

                  setFormData({
                    firstName:
                      profile.firstName,

                    lastName:
                      profile.lastName,
                  });

                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="primary-btn"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : "Save Changes"}
              </button>

            </div>

          </form>

        )}

      </section>

    </main>
  );
};

export default Profile;