import React from "react";
import "../assets/styles/UtilisateurCarte.css";
import avatar from "../assets/avatar1.svg";

function UtilisateurCarte() {
  return (
    <div className="UserCard">
      <div className="containerUserCardImg">
        <img src={avatar} alt="profile" />
      </div>
      <h3>Prenom</h3>
      <h2>Nom</h2>
      <h4>Service</h4>
    </div>
  );
}

export default UtilisateurCarte;
