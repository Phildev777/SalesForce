import React from "react";
import "../assets/styles/UtilisateurCarte.css";
import PropsTypes from "prop-types";
import avatar from "../assets/avatar1.svg";

function UtilisateurCarte({ firstname, lastname, service }) {
  return (
    <div className="UserCard">
      <div className="containerUserCardImg">
        <img src={avatar} alt="profile" />
      </div>
      <h3>{firstname}</h3>
      <h2>{lastname}</h2>
      <h4>{service}</h4>
    </div>
  );
}
UtilisateurCarte.propTypes = {
  firstname: PropsTypes.string.isRequired,
  lastname: PropsTypes.string.isRequired,
  service: PropsTypes.string.isRequired,
};

export default UtilisateurCarte;
