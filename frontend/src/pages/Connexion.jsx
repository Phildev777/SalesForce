import React from "react";

import FonctionConnexion from "@components/FonctionConnexion";
import FonctionMdpOublie from "@components/FonctionMdpOublie";
import "../assets/styles/connexion.css";

function Connexion() {
  return (
    <div className="formDeCo">
      <div className="TitleCo">
        <h2>Connexion</h2>
      </div>

      <div className="Form">
        <form action="" method="post">
          <ul className="UlForm">
            <div className="LiForm">
              <li id="Nom">
                <label className="LabelForm" type="text">
                  Nom d'ulilisateur :{" "}
                </label>
                <input type="text" className="InputForm" />
              </li>

              <li id="Mdp">
                <label className="LabelForm" type="text">
                  Mot de passe :{" "}
                </label>
                <input type="password" className="InputForm" />
              </li>
            </div>

            <li className="LiCompo">
              <FonctionMdpOublie />
            </li>

            <li className="LiCompo">
              <FonctionConnexion />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
