import './PlanSelect.css'

function PlanSelect({ children }) {
  return (
    <button className="select-btn">
      {children}
    </button>
  );
}

export default PlanSelect;