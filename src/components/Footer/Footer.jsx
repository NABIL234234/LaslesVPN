import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-container">
              <div className="logo-container-footer">
                <img src={logo} alt="logo" />
                <p>
                  LaslesVPN is a private virtual network that <br /> has unique
                  features and has high security.
                </p>
              </div>
              <div className="apps-container">
                <FaFacebook className="img-facebook" />
                <FaTwitter className="img-twitter" />
                <FaInstagram className="img-instagram" />
              </div>
              <p>©2020LaslesVPN</p>
            </div>
            <div className="product-items">
              <ul>
                <span>Product</span>
                <li>Download </li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="engage-items">
              <ul>
                <span>Engage</span>
                <li>LaslesVPN ? </li>
                <li>FAQ</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="earn-money-items">
              <ul>
                <span>Earn Money</span>
                <li>Affiliate</li>
                <li>Become Partner </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
