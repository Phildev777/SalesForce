import React from "react";
import Link from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="containerHeaderImg">
        <img alt="profil" />

        <h1>test</h1>
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
  );
}

export default Header;
