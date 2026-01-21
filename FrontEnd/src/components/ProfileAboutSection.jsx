import { HiUser, HiPencil } from "react-icons/hi";

export default function ProfileAboutSection({
  aboutSummary,
  setAboutSummary,
  isEditing,
  setIsEditing,
}) {
  return (
    <section className="profile-section">
      <header className="profile-section-header">
        <div className="profile-section-title-wrapper">
          <HiUser className="profile-section-icon" />
          <h2 className="profile-section-title">About</h2>
        </div>

        <button
          className="profile-edit-button"
          onClick={() => setIsEditing((v) => !v)}
        >
          <HiPencil className="profile-edit-icon" />
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </header>

      <div className="profile-section-content">
        {isEditing ? (
          <textarea
            rows={5}
            className="profile-textarea"
            value={aboutSummary}
            onChange={(e) => setAboutSummary(e.target.value)}
          />
        ) : (
          <p className="profile-about-text">
            {aboutSummary || "No about summary added yet."}
          </p>
        )}
      </div>
    </section>
  );
}
