import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="d-flex align-items-center">
              <img src="./src/assets/logo.png" alt="" className="logo-design"/>
              <Link className="p-2 text-white fs-3" to="/">BOOGAMING</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
