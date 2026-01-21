import { HiX } from "react-icons/hi";

export default function AddItemModal({
  title,
  isOpen,
  onClose,
  onSubmit,
  formData,
  setFormData,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            <HiX className="modal-close-icon" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-form-group">
            <label className="modal-label">Name</label>
            <input
              type="text"
              className="modal-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Private Pilot License"
              required
            />
          </div>

          <div className="modal-form-group">
            <label className="modal-label">Cost</label>
            <input
              type="number"
              className="modal-input"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
              placeholder="e.g., 150"
              min="0"
              step="0.01"
            />
          </div>

          <div className="modal-form-group">
            <label className="modal-label">Description</label>
            <textarea
              className="modal-textarea"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Add any additional details..."
              rows={4}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="modal-cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="modal-submit-button">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
