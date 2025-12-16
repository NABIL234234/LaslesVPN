import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-row">
          <div className="logo">
            <img src="./src/assets/Logo.png" alt="logo" />
          </div>
          <div className="nav-items">
            <nav>About</nav>
            <nav>Features</nav>
            <nav>Pricing</nav>
            <nav>Testimonials</nav>
            <nav>Help</nav>
          </div>
          <div className="sing-buttons">
            <button className="sing-in">Sign In</button>
            <button className="sing-up">Sign Up</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
