import { useState, useContext, useEffect } from "react";
import "../assets/styles/header.css";
import { NavLink } from "react-router-dom";
import { ImSwitch } from "react-icons/im";
import axios from "axios";
import avatarImg from "../assets/avatar.svg";

import UserContext from "../contexts/UserContext";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const userContext = useContext(UserContext);

  const [dataUserId, setDataUserId] = useState([]);

  const getUserById = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/${
          userContext.user.id
        }`
      )
      .then((res) => {
        setDataUserId(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (userContext.user.id) getUserById();
  }, [userContext.user.id, dataUserId.avatar]);

  return (
    <>
      <header className={`${nav ? "show" : "hide"}`}>
        <div className="containerHeaderImg">
          {userContext.user && userContext.user.avatar ? (
            <img
              alt="profil"
              src={`${import.meta.env.VITE_BACKEND_URL}/${
                userContext.user.avatar
              }`}
            />
          ) : (
            <img alt="profil" src={avatarImg} />
          )}
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
          {userContext.user.admin === 1 ? (
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
