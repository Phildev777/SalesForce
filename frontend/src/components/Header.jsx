import React from "react";
import "../assets/styles/header.css";
import { NavLink } from "react-router-dom";
import avatar from "../assets/avatar1.svg";

function Header() {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <>
      <header className={`${nav ? "show" : "hide"}`}>
        <div className="containerHeaderImg">
          <img alt="profil" src={avatar} />
        </div>
        <ul>
          <li>
            <NavLink to="/mon espace">Mon espace</NavLink>
          </li>
          <li>
            <NavLink to="/idees">Idées</NavLink>
          </li>
          <li>
            <NavLink to="/utilisateurs">Utilisateurs</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/admin">Admin</NavLink>
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
