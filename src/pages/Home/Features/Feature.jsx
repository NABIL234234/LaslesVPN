import "./Feature.css";
import illustration from "../../../assets/Illustration-2.png";
import check from "../../../assets/check.png";

function Feature() {
  return (
    <>
      <section>
        <div className="container">
          <div id="features" className="feature-wrapper">
            <div>
              <img src={illustration} alt="illustration" />
            </div>
            <div className="feature-container">
              <h2>We Provide Many Features You Can Use</h2>
              <p>
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
              <div className="check-container">
                <div className="check-wrapper">
                  <img src={check} alt="check" />
                  <span>Powerfull online protection.</span>
                </div>
                <div className="check-wrapper">
                  <img src={check} alt="check" />
                  <span>Internet without borders.</span>
                </div>
                <div className="check-wrapper">
                  <img src={check} alt="check" />
                  <span>Supercharged VPN</span>
                </div>
                <div className="check-wrapper">
                  <img src={check} alt="check" />
                  <span>No specific time limits.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
