import React from "react";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <>
      <header className={`${nav ? "show" : "hide"}`}>
        <div className="containerHeaderImg">
          <img alt="profil" />
        </div>
        <ul>
          <li>
            <Link to="/mon espace">Mon espace</Link>
          </li>
          <li>
            <Link to="/idees">Idées</Link>
          </li>
          <li>
            <Link to="/utilisateurs">Utilisateurs</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </header>
      <button className="burger" type="button" onClick={handleNav}>
        <span className="bugerIcon" />
      </button>
    </>
  );
}

export default Header;
