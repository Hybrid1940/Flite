import { useState } from "react";
import { HiMoon, HiSun, HiMail, HiLockClosed, HiBell, HiGlobe } from "react-icons/hi";
import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext";
import "./styles/settings.css";

function SettingsPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [email, setEmail] = useState("user@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    // TODO: Implement email update
    console.log("Email update:", email);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: Implement password update
    console.log("Password update");
  };


  return (
    <div className="settings-page">
      <Navbar />
      
      <div className="settings-container">
        <div className="settings-header">
          <h1 className="settings-title">Settings</h1>
          <p className="settings-subtitle">Manage your account settings and preferences</p>
        </div>

        <div className="settings-content">
          {/* Appearance Section */}
          <section className="settings-section">
            <div className="settings-section-header">
              <div className="settings-section-title-wrapper">
                {darkMode ? (
                  <HiMoon className="settings-section-icon" />
                ) : (
                  <HiSun className="settings-section-icon" />
                )}
                <h2 className="settings-section-title">Appearance</h2>
              </div>
            </div>
            
            <div className="settings-section-content">
              <div className="settings-toggle-group">
                <div className="settings-toggle-info">
                  <label className="settings-toggle-label">Dark Mode</label>
                  <p className="settings-toggle-description">
                    Switch between light and dark themes
                  </p>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`settings-toggle ${darkMode ? "settings-toggle-active" : ""}`}
                  aria-label="Toggle dark mode"
                >
                  <span className="settings-toggle-slider"></span>
                </button>
              </div>
            </div>
          </section>

          {/* Account Settings Section */}
          <section className="settings-section">
            <div className="settings-section-header">
              <div className="settings-section-title-wrapper">
                <HiMail className="settings-section-icon" />
                <h2 className="settings-section-title">Account Settings</h2>
              </div>
            </div>
            
            <div className="settings-section-content">
              {/* Email Update */}
              <form onSubmit={handleEmailUpdate} className="settings-form">
                <div className="settings-form-group">
                  <label htmlFor="email" className="settings-form-label">
                    Email Address
                  </label>
                  <div className="settings-form-input-wrapper">
                    <HiMail className="settings-form-icon" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="settings-form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="settings-form-button">
                  Update Email
                </button>
              </form>

              {/* Password Update */}
              <form onSubmit={handlePasswordUpdate} className="settings-form">
                <div className="settings-form-group">
                  <label htmlFor="currentPassword" className="settings-form-label">
                    Current Password
                  </label>
                  <div className="settings-form-input-wrapper">
                    <HiLockClosed className="settings-form-icon" />
                    <input
                      type="password"
                      id="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="settings-form-input"
                      placeholder="Enter current password"
                      required
                    />
                  </div>
                </div>

                <div className="settings-form-group">
                  <label htmlFor="newPassword" className="settings-form-label">
                    New Password
                  </label>
                  <div className="settings-form-input-wrapper">
                    <HiLockClosed className="settings-form-icon" />
                    <input
                      type="password"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="settings-form-input"
                      placeholder="Enter new password"
                      required
                      minLength={8}
                    />
                  </div>
                </div>

                <div className="settings-form-group">
                  <label htmlFor="confirmPassword" className="settings-form-label">
                    Confirm New Password
                  </label>
                  <div className="settings-form-input-wrapper">
                    <HiLockClosed className="settings-form-icon" />
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="settings-form-input"
                      placeholder="Confirm new password"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
                <button type="submit" className="settings-form-button">
                  Update Password
                </button>
              </form>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="settings-section">
            <div className="settings-section-header">
              <div className="settings-section-title-wrapper">
                <HiBell className="settings-section-icon" />
                <h2 className="settings-section-title">Notifications</h2>
              </div>
            </div>
            
            <div className="settings-section-content">
              <div className="settings-toggle-group">
                <div className="settings-toggle-info">
                  <label className="settings-toggle-label">Email Notifications</label>
                  <p className="settings-toggle-description">
                    Receive notifications via email
                  </p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, email: !notifications.email })}
                  className={`settings-toggle ${notifications.email ? "settings-toggle-active" : ""}`}
                >
                  <span className="settings-toggle-slider"></span>
                </button>
              </div>

              <div className="settings-toggle-group">
                <div className="settings-toggle-info">
                  <label className="settings-toggle-label">Push Notifications</label>
                  <p className="settings-toggle-description">
                    Receive push notifications in your browser
                  </p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, push: !notifications.push })}
                  className={`settings-toggle ${notifications.push ? "settings-toggle-active" : ""}`}
                >
                  <span className="settings-toggle-slider"></span>
                </button>
              </div>

              <div className="settings-toggle-group">
                <div className="settings-toggle-info">
                  <label className="settings-toggle-label">SMS Notifications</label>
                  <p className="settings-toggle-description">
                    Receive notifications via text message
                  </p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, sms: !notifications.sms })}
                  className={`settings-toggle ${notifications.sms ? "settings-toggle-active" : ""}`}
                >
                  <span className="settings-toggle-slider"></span>
                </button>
              </div>
            </div>
          </section>

          {/* Language & Region Section */}
          <section className="settings-section">
            <div className="settings-section-header">
              <div className="settings-section-title-wrapper">
                <HiGlobe className="settings-section-icon" />
                <h2 className="settings-section-title">Language & Region</h2>
              </div>
            </div>
            
            <div className="settings-section-content">
              <div className="settings-form-group">
                <label htmlFor="language" className="settings-form-label">
                  Language
                </label>
                <select
                  id="language"
                  className="settings-form-select"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>

              <div className="settings-form-group">
                <label htmlFor="timezone" className="settings-form-label">
                  Timezone
                </label>
                <select
                  id="timezone"
                  className="settings-form-select"
                  defaultValue="utc"
                >
                  <option value="utc">UTC</option>
                  <option value="est">Eastern Time (EST)</option>
                  <option value="pst">Pacific Time (PST)</option>
                  <option value="cst">Central Time (CST)</option>
                </select>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
