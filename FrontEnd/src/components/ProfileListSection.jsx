import { HiPlus, HiTrash } from "react-icons/hi";

export default function ProfileListSection({
  title,
  icon: Icon,
  items,
  onRemove,
  onAddClick,
}) {
  return (
    <section className="profile-section">
      <header className="profile-section-header">
        <div className="profile-section-title-wrapper">
          <Icon className="profile-section-icon" />
          <h2 className="profile-section-title">{title}</h2>
        </div>
        <button
          className="profile-add-header-button"
          onClick={onAddClick}
        >
          <HiPlus className="profile-add-header-icon" />
          Add
        </button>
      </header>

      <div className="profile-section-content">
        {items.length ? (
          <div className="profile-list">
            {items.map((item) => (
              <div key={item.id} className="profile-list-item">
                <div className="profile-list-item-content">
                  <span className="profile-list-item-text">{item.name}</span>
                  {item.cost && (
                    <span className="profile-list-item-cost">${item.cost}</span>
                  )}
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="profile-list-item-remove"
                >
                  <HiTrash className="profile-list-item-icon" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="profile-empty-text">None added yet.</p>
        )}
      </div>
    </section>
  );
}
