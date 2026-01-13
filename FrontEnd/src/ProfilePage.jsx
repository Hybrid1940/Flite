import { useState, useRef } from "react";
import { HiCamera, HiUser, HiBadgeCheck, HiBookOpen, HiPencil, HiTrash, HiPlus } from "react-icons/hi";
import Navbar from "./components/Navbar";
import "./styles/profile.css";

function ProfilePage() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [aboutSummary, setAboutSummary] = useState(
    "Aviation enthusiast with a passion for flight training and connecting with fellow pilots. Always eager to learn and share knowledge with the aviation community."
  );
  const [certifications, setCertifications] = useState([
    { id: 1, name: "Private Pilot License (PPL)" },
    { id: 2, name: "Instrument Rating" },
  ]);
  const [courses, setCourses] = useState([
    { id: 1, name: "Commercial Pilot License (CPL)" },
    { id: 2, name: "Multi-Engine Rating" },
  ]);
  const [newCertification, setNewCertification] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleAddCertification = (e) => {
    e.preventDefault();
    if (newCertification.trim()) {
      setCertifications([
        ...certifications,
        { id: Date.now(), name: newCertification.trim() },
      ]);
      setNewCertification("");
    }
  };

  const handleRemoveCertification = (id) => {
    setCertifications(certifications.filter((cert) => cert.id !== id));
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (newCourse.trim()) {
      setCourses([...courses, { id: Date.now(), name: newCourse.trim() }]);
      setNewCourse("");
    }
  };

  const handleRemoveCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving profile:", {
      profilePhoto,
      aboutSummary,
      certifications,
      courses,
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <h1 className="profile-title">My Profile</h1>
          <p className="profile-subtitle">Manage your profile information and credentials</p>
        </div>

        <div className="profile-content">
          {/* Left Column - Photo and Basic Info */}
          <div className="profile-left">
            {/* Photo Section */}
            <div className="profile-photo-section">
              <div className="profile-photo-wrapper group" onClick={isEditing ? handlePhotoClick : undefined}>
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="profile-photo"
                  />
                ) : (
                  <div className="profile-photo-placeholder">
                    <HiUser className="profile-photo-icon" />
                  </div>
                )}
                {isEditing && (
                  <div className="profile-photo-overlay">
                    <HiCamera className="profile-photo-camera-icon" />
                    <span className="profile-photo-text">Change Photo</span>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="profile-photo-input"
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="profile-right">
            {/* About Summary Section */}
            <section className="profile-section">
              <div className="profile-section-header">
                <div className="profile-section-title-wrapper">
                  <HiUser className="profile-section-icon" />
                  <h2 className="profile-section-title">About</h2>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="profile-edit-button"
                >
                  {isEditing ? (
                    <>
                      <HiPencil className="profile-edit-icon" />
                      Cancel
                    </>
                  ) : (
                    <>
                      <HiPencil className="profile-edit-icon" />
                      Edit
                    </>
                  )}
                </button>
              </div>

              <div className="profile-section-content">
                {isEditing ? (
                  <textarea
                    value={aboutSummary}
                    onChange={(e) => setAboutSummary(e.target.value)}
                    className="profile-textarea"
                    placeholder="Tell us about yourself..."
                    rows={5}
                  />
                ) : (
                  <p className="profile-about-text">{aboutSummary || "No about summary added yet."}</p>
                )}
              </div>
            </section>

            {/* Certifications Section */}
            <section className="profile-section">
              <div className="profile-section-header">
                <div className="profile-section-title-wrapper">
                  <HiBadgeCheck className="profile-section-icon" />
                  <h2 className="profile-section-title">Certifications</h2>
                </div>
              </div>

              <div className="profile-section-content">
                {certifications.length > 0 ? (
                  <div className="profile-list">
                    {certifications.map((cert) => (
                      <div key={cert.id} className="profile-list-item">
                        <span className="profile-list-item-text">{cert.name}</span>
                        {isEditing && (
                          <button
                            onClick={() => handleRemoveCertification(cert.id)}
                            className="profile-list-item-remove"
                            aria-label="Remove certification"
                          >
                            <HiTrash className="profile-list-item-icon" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="profile-empty-text">No certifications added yet.</p>
                )}

                {isEditing && (
                  <form onSubmit={handleAddCertification} className="profile-add-form">
                    <div className="profile-add-input-wrapper">
                      <input
                        type="text"
                        value={newCertification}
                        onChange={(e) => setNewCertification(e.target.value)}
                        className="profile-add-input"
                        placeholder="Add certification (e.g., CFI, CFII, MEI)"
                      />
                      <button type="submit" className="profile-add-button">
                        <HiPlus className="profile-add-icon" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </section>

            {/* Courses Section */}
            <section className="profile-section">
              <div className="profile-section-header">
                <div className="profile-section-title-wrapper">
                  <HiBookOpen className="profile-section-icon" />
                  <h2 className="profile-section-title">Courses</h2>
                </div>
              </div>

              <div className="profile-section-content">
                {courses.length > 0 ? (
                  <div className="profile-list">
                    {courses.map((course) => (
                      <div key={course.id} className="profile-list-item">
                        <span className="profile-list-item-text">{course.name}</span>
                        {isEditing && (
                          <button
                            onClick={() => handleRemoveCourse(course.id)}
                            className="profile-list-item-remove"
                            aria-label="Remove course"
                          >
                            <HiTrash className="profile-list-item-icon" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="profile-empty-text">No courses added yet.</p>
                )}

                {isEditing && (
                  <form onSubmit={handleAddCourse} className="profile-add-form">
                    <div className="profile-add-input-wrapper">
                      <input
                        type="text"
                        value={newCourse}
                        onChange={(e) => setNewCourse(e.target.value)}
                        className="profile-add-input"
                        placeholder="Add course (e.g., Private Pilot License)"
                      />
                      <button type="submit" className="profile-add-button">
                        <HiPlus className="profile-add-icon" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </section>

            {/* Save Button */}
            {isEditing && (
              <div className="profile-actions">
                <button onClick={handleSave} className="profile-save-button">
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
