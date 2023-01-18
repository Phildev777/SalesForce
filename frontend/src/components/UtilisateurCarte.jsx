import React from "react";
import "../assets/styles/UtilisateurCarte.css";
import PropsTypes from "prop-types";
import avatar from "../assets/avatar1.svg";

function UtilisateurCarte({
  firstname,
  lastname,
  service,
  displayProfileCard,
}) {
  return (
    <div
      className="UserCard"
      onClick={() => displayProfileCard}
      role="button"
      onKeyDown={displayProfileCard}
      tabIndex={0}
    >
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
  displayProfileCard: PropsTypes.func.isRequired,
};

export default UtilisateurCarte;
