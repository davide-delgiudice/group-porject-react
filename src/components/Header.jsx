import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="d-flex align-items-center">
              {/* logo */}
              <span className="p-2 text-white fs-3">BOOGAMING</span>
              <Link className="btn btn-primary" to="/SearchPages/" >vai a pagina di ricerca</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
