import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-row">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-items">
              <nav>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  spy={true}
                >
                  About
                </Link>
              </nav>
              <nav>
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  spy={true}
                >
                  Features
                </Link>
              </nav>
              <nav>
                {" "}
                <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  spy={true}
                >
                  Pricing
                </Link>
              </nav>
              <nav>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  offset={-90}
                  activeClass="active"
                  spy={true}
                >
                  Testimonials
                </Link>
              </nav>
              <nav>
                {" "}
                <Link
                  to="help"
                  smooth={true}
                  duration={500}
                  offset={-90}
                  activeClass="active"
                  spy={true}
                >
                  Help
                </Link>
              </nav>
            </div>
            <div className="sing-buttons">
              <button className="sing-in">Sign In</button>
              <button className="sing-up">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

