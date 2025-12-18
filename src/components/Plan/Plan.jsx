import "./Plan.css";
import box from "../../assets/box.png";
import planCheck from "../../assets/plan-check.png";
import PlanSelect from "../../components/Buttons/PlanSelect/PlanSelect";

function Plan({ infoPlan }) {
  return (
    <>
      <div className={`plan-container`}>
        <img src={box} alt="box" />
        <h3>{infoPlan.title}</h3>

        {infoPlan.features.map((feature, index) => (
          <div className="plan-check-container" key={index}>
            <div className="plan-wrapper-check">
              <img src={planCheck} alt="check" />
              <span>{feature}</span>
            </div>
          </div>
        ))}

        <div className="select-btn-container">
          <h2>{infoPlan.price}</h2>
          <PlanSelect>Select</PlanSelect>
        </div>
      </div>
    </>
  );
}

export default Plan;
