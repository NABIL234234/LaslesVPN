import "./Global.css";
import global from "../../../assets/Global.png";
import sponsored from "../../../assets/Sponsored.png";

function Global() {
  return (
    <>
      <section>
        <div className="global">
          <div className="global-text">
            <h1>
              Huge Global Network <br /> of Fast VPN
            </h1>
            <p>
              See LaslesVPN everywhere to make it easier for you when you move <br/>
              locations.
            </p>
          </div>
          <div className="global-img">
            <img src={global} alt="global" />
            <img src={sponsored} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Global;
