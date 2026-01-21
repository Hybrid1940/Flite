import { useRef } from "react";
import { HiCamera, HiUser } from "react-icons/hi";

export default function ProfilePhotoSection({ profilePhoto, setProfilePhoto, isEditing }) {
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfilePhoto(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile-left">
      <div
        className="profile-photo-wrapper group"
        onClick={isEditing ? () => fileInputRef.current?.click() : undefined}
      >
        {profilePhoto ? (
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
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
      />
    </div>
  );
}
