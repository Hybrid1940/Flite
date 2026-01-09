import { HiCog, HiUser, HiUserGroup, HiLogout } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    // TODO: Implement logout functionality
    console.log("Logout clicked");
  };

  const handleSettings = () => {
    // TODO: Implement settings functionality
    console.log("Settings clicked");
  };

  const handleMyInstructors = () => {
    // TODO: Implement my instructors functionality
    console.log("My Instructors clicked");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo/Brand */}
          <Link to="/" className="navbar-brand">
            ✈️ Flite
          </Link>

          {/* Navigation Links */}
          <div className="navbar-links">
            <Link
              to="/marketplace"
              className={`navbar-link ${
                isActive("/marketplace")
                  ? "navbar-link-active"
                  : "navbar-link-default"
              }`}
            >
              <HiUserGroup className="navbar-icon" />
              <span className="navbar-text-responsive">Explore Pilots</span>
            </Link>
            
            <button
              onClick={handleMyInstructors}
              className="navbar-button"
            >
              <HiUserGroup className="navbar-icon" />
              <span className="navbar-text-responsive">My Instructors</span>
            </button>

            <Link
              to="/profile"
              className={`navbar-link ${
                isActive("/profile")
                  ? "navbar-link-active"
                  : "navbar-link-default"
              }`}
            >
              <HiUser className="navbar-icon" />
              <span className="navbar-text-responsive">Profile</span>
            </Link>

            <button
              onClick={handleSettings}
              className="navbar-button-icon"
              aria-label="Settings"
            >
              <HiCog className="navbar-icon" />
            </button>

            <button
              onClick={handleLogout}
              className="navbar-button-logout"
            >
              <HiLogout className="navbar-icon" />
              <span className="navbar-text-responsive">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
