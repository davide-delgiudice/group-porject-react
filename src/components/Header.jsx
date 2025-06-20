import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/SearchPage?q=${encodeURIComponent(search)}`);
  };

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
          <div className="d-flex justify-content-end m-1">
            <form className="search-form-header" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                className="search-input m-1"
                placeholder="cerca"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="btn-search" onClick={handleSearch} type="button">Ricerca</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
