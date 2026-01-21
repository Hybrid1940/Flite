import { useState } from "react";
import { HiBadgeCheck, HiBookOpen } from "react-icons/hi";
import Navbar from "./components/Navbar";
import ProfilePhotoSection from "./components/ProfilePhotoSection";
import ProfileAboutSection from "./components/ProfileAboutSection";
import ProfileListSection from "./components/ProfileListSection";
import AddItemModal from "./components/AddItemModal";
import "./styles/profile.css";

export default function ProfilePage() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [aboutSummary, setAboutSummary] = useState(
    "Aviation enthusiast with a passion for flight training and connecting with fellow pilots. Always eager to learn and share knowledge with the aviation community."
  );

  const [certifications, setCertifications] = useState([
    { id: 1, name: "Private Pilot License (PPL)", cost: 150, description: "" },
    { id: 2, name: "Instrument Rating", cost: 200, description: "" },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, name: "Commercial Pilot License (CPL)", cost: 300, description: "" },
    { id: 2, name: "Multi-Engine Rating", cost: 250, description: "" },
  ]);

  const [showCertificationModal, setShowCertificationModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);

  const [newCertification, setNewCertification] = useState({ name: "", cost: "", description: "" });
  const [newCourse, setNewCourse] = useState({ name: "", cost: "", description: "" });

  /* ---------------- Handlers ---------------- */

  const addItem = (formData, setter, listSetter) => {
    if (!formData.name.trim()) return;
    listSetter((prev) => [...prev, { id: Date.now(), ...formData }]);
    setter({ name: "", cost: "", description: "" });
  };

  const removeItem = (id, setter) => {
    setter((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveAbout = () => {
    console.log({
      profilePhoto,
      aboutSummary,
    });
    setIsEditingAbout(false);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-container">
        {/* Header */}
        <header className="section-header">
          <div className="section-container">
            <h1 className="section-title">My Profile</h1>
            <p className="section-subtitle">
              Manage your profile information and credentials
            </p>
          </div>
        </header>

        <div className="profile-content section-container">
          {/* Left */}
          <ProfilePhotoSection
            profilePhoto={profilePhoto}
            setProfilePhoto={setProfilePhoto}
            isEditing={isEditingAbout}
          />

          {/* Right */}
          <div className="profile-right">
            {/* About */}
            <ProfileAboutSection
              aboutSummary={aboutSummary}
              setAboutSummary={setAboutSummary}
              isEditing={isEditingAbout}
              setIsEditing={setIsEditingAbout}
            />

            {/* Certifications */}
            <ProfileListSection
              title="Certifications"
              icon={HiBadgeCheck}
              items={certifications}
              onRemove={(id) => removeItem(id, setCertifications)}
              onAddClick={() => setShowCertificationModal(true)}
            />

            {/* Courses */}
            <ProfileListSection
              title="Courses"
              icon={HiBookOpen}
              items={courses}
              onRemove={(id) => removeItem(id, setCourses)}
              onAddClick={() => setShowCourseModal(true)}
            />

            {isEditingAbout && (
              <div className="profile-actions">
                <button onClick={handleSaveAbout} className="profile-save-button">
                  Save Changes
                </button>
              </div>
            )}

            {/* Certification Modal */}
            {showCertificationModal && (
              <AddItemModal
                title="Add Certification"
                isOpen={showCertificationModal}
                onClose={() => setShowCertificationModal(false)}
                onSubmit={(data) => {
                  addItem(data, setNewCertification, setCertifications);
                  setShowCertificationModal(false);
                }}
                formData={newCertification}
                setFormData={setNewCertification}
              />
            )}

            {/* Course Modal */}
            {showCourseModal && (
              <AddItemModal
                title="Add Course"
                isOpen={showCourseModal}
                onClose={() => setShowCourseModal(false)}
                onSubmit={(data) => {
                  addItem(data, setNewCourse, setCourses);
                  setShowCourseModal(false);
                }}
                formData={newCourse}
                setFormData={setNewCourse}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
