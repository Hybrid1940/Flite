function FilterButton({ label, value, selectedCert, onClick }) {
  const isSelected = selectedCert === value;

  return (
    <button
      onClick={onClick}
      className={`btn-filter ${
        isSelected ? "btn-filter-selected" : "btn-filter-unselected"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterButton;
