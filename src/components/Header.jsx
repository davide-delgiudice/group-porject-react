import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/SearchPage", { state: { search } })
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <div className="d-flex align-items-center">
              <img src="./src/assets/logo.png" alt="" className="logo-design" />
              <Link className="nav p-2 text-white fs-3" to="/">BOOGAMING</Link>

            </div>
          </div>

          <div className="d-flex justify-content-end flex-grow-1">
            <form className="search-form-header" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                className="search-input"
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
