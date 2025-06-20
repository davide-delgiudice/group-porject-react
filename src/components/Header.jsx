import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="d-flex align-items-center">
              <Link className="p-2 text-white fs-3" to="/">
                <img src="./src/assets/logo.png" alt="" className="logo-design" />
                BOOGAMING
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
