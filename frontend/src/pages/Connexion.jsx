import React, { useState, useContext } from "react";
import axios from "axios";

import "../assets/styles/connexion.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Connexion() {
  const [nom, setNom] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const userContext = useContext(UserContext)
  const navigate = useNavigate();

  const handleNom = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/`, {
        nom,
        motdepasse,
      })
      .then((res) => {
        if (res.data === "Utilisateur pas trouvé") {
          alert(res.data);
        } else if (res.data.admin === 0) {
          localStorage.setItem("token", res.data.token);

          userContext.setUser({
            token: res.data.token,
            id: res.data.id,
            isAdmin: res.data.admin,
          });
          navigate("/mon espace");
        } else if (res.data.admin === 1) {
          localStorage.setItem("token", res.data.token);
          userContext.setUser ({
            token: res.data.token,
            id: res.data.id,
            isAdmin: res.data.admin,
          });
          navigate("/admin");
        }
      })

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="formDeCo">
      <div className="TitleCo">
        <h2>Connexion</h2>
      </div>

      <div className="Form">
        <form onSubmit={handleNom}>
          <ul className="UlForm">
            <div className="LiForm">
              <li id="Nom">
                <label htmlFor="text" className="LabelForm">
                  Nom d'ulilisateur :
                </label>
                <input
                  type="text"
                  className="InputForm"
                  placeholder="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </li>

              <li id="Mdp">
                <label htmlFor="password" className="LabelForm">
                  Mot de passe :
                </label>
                <input
                  type="password"
                  className="InputForm"
                  placeholder="Mot de passe"
                  value={motdepasse}
                  onChange={(e) => setMotdepasse(e.target.value)}
                />
              </li>
            </div>

            <li className="LiCompo">
              <button type="submit">connexion</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
