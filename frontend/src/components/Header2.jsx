import { useState } from "react";
import "../assets/styles/header.css";
import { NavLink } from "react-router-dom";
import { ImSwitch } from "react-icons/im";
import avatar from "../assets/avatar1.svg";
// import * as Icons from "react-icons/io";
function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  /*   function CustomFaIcon({ GoAlert }) {
      const FaIcon = Icons[GoAlert];
      if (!FaIcon) return <p>PAS DE LOGO</p>;
  
      return <FaIcon />;
    } */

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
            <NavLink to="/">
              <ImSwitch className="disconnect" /> Déconnexion
            </NavLink>
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
