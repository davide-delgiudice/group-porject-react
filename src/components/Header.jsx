import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="d-flex align-items-center">
              <img src="./src/assets/logo.png" alt="" className="logo-design"/>
              <span className="nav p-2 text-white fs-3">BOOGAMING</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
