import React from "react";
import "../assets/styles/UtilisateurCarte.css";
import PropsTypes from "prop-types";
import picture from "../assets/avatar1.svg";

function UtilisateurCarte({
  firstname,
  lastname,
  service,
  displayProfileCard,
  avatar,
  dateembauche,
  anniversaire,
  email,
}) {
  return (
    <div
      className="UserCard"
      onClick={() =>
        displayProfileCard({
          prenom: firstname,
          username: lastname,
          serviceName: service,
          dateembauche,
          anniversaire,
          email,
          avatar,
        })
      }
      role="button"
      onKeyDown={displayProfileCard}
      tabIndex={0}
    >
      <div className="containerUserCardImg">
        {!avatar ? (
          <img src={picture} alt="profile" />
        ) : (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${avatar}`}
            alt="profile"
          />
        )}
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
  avatar: PropsTypes.string.isRequired,
  dateembauche: PropsTypes.string.isRequired,
  anniversaire: PropsTypes.string.isRequired,
  email: PropsTypes.string.isRequired,
};

export default UtilisateurCarte;
