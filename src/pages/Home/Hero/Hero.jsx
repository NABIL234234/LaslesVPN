import "./Hero.css";
import illustration from "../../../assets/illustration 1.png";
import GetStarted from "../../../components/Buttons/GetStarted/GetStarted";
import User from "../../../assets/user.png";
import Location from "../../../assets/location.jpg";
import Server from "../../../assets/server.png";
import Border from "../../../assets/border.png";

function Hero() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="welcome-section">
            <h1>
              Want anything to be easy with <span>LaslesVPN.</span>
            </h1>
            <p>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <GetStarted>Get Started</GetStarted>
          </div>
          <div className="illustration">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
        <div className="statistic-wrapper">
          <div className="statistic-container">
            <img src={User} alt="user" />
            <div className="statistic-text">
              <span>90+</span>
              <p>Users</p>
            </div>
          </div>
          <img src={Border} alt="" />
          <div className="statistic-container">
            <img src={Location} alt="user" />
            <div className="statistic-text">
              <span>30+</span>
              <p>Locations</p>
            </div>
          </div>
          <img src={Border} alt="" />
          <div className="statistic-container">
            <img src={Server} alt="user" />
            <div className="statistic-text">
              <span>50+</span>
              <p>Servers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
