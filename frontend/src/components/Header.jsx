import { useState, useContext } from "react";
import "../assets/styles/header.css";
import { NavLink } from "react-router-dom";
import { ImSwitch } from "react-icons/im";
import avatar from "../assets/avatar1.svg";

import UserContext from "../contexts/UserContext";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const userContext = useContext(UserContext);

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
          {userContext.user.isAdmin === 1 ? (
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          ) : null}
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
