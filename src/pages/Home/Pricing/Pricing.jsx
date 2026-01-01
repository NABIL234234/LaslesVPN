import "./Pricing.css";

import Plan from "../../../components/Plan/Plan";

function Pricing() {
  const plansData = [
    {
      id: 1,
      title: "Free Plan",
      price: "Free",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      isPopular: false,
    },
    {
      id: 2,
      title: "Standard Plan",
      price: "$9 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      isPopular: true,
    },
    {
      id: 3,
      title: "Premium Plan",
      price: "$12 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      isPopular: false,
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          {" "}
          <div className="plan-table">
            <h1>Choose Your Plan</h1>
            <p>
              Let's choose the package that is best for you and explore it
              happily and <br /> cheerfully.
            </p>
          </div>
          <div id="pricing" className="plan-wrapper">
            {plansData.map((plan) => (
              <Plan key={plan.id} infoPlan={plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
