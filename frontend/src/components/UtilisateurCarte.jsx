import React from "react";
import "../assets/styles/UtilisateurCarte.css";
import PropsTypes from "prop-types";
import avatar from "../assets/avatar1.svg";

function UtilisateurCarte({
  firstname,
  lastname,
  service,
  displayProfileCard,
  avatarImg,
}) {
  return (
    <div
      className="UserCard"
      onClick={() =>
        displayProfileCard({
          prenom: firstname,
          nom: lastname,
          service,
        })
      }
      role="button"
      onKeyDown={displayProfileCard}
      tabIndex={0}
    >
      <div className="containerUserCardImg">
        {!avatarImg ? (
          <img src={avatar} alt="profile" />
        ) : (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${avatarImg}`}
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
  avatarImg: PropsTypes.string.isRequired,
};

export default UtilisateurCarte;
