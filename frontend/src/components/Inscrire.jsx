import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../assets/styles/inscrire.css";

function Inscrire() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [email, setEmail] = useState("");
  const [dateembauche, setDateembauche] = useState("");
  const [admin, setAdmin] = useState(false);
  const [serviceIdservice, setServiceIdservice] = useState("");
  const [fonctionIdfonction, setFonctionIdfonction] = useState("");
  const [anniversaire, setAnniversaire] = useState("");

  const handleNom = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5005/api/utilisateur/creation", {
        nom,
        prenom,
        dateembauche,
        motdepasse,
        admin,
        anniversaire,
        serviceIdservice,
        fonctionIdfonction,
        email,
      })

      .then((res) => {
        console.warn(res.data);
      })

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="main">
      <div>
        <div className="titleIns">Inscrire un Collaborateur</div>
      </div>
      <div className="selec">
        <ul className="ulIns">
          <li>
            <NavLink to="/admin/supprimer" className="linkIn">
              supprimer un collaborateur
            </NavLink>
          </li>
          {/*    <li>
            <NavLink to="/admin/modifier"className="linkIn">modifier un collaborateur</NavLink>
          </li> */}
        </ul>

        <div>
          <form onSubmit={handleNom}>
            <ul>
              <div className="formIns">
                <li>
                  <label className="textIn">Nom du Collaborateur :</label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </li>

                <li>
                  <label className="textIn">Prénom du collaborateur :</label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </li>
                <li>
                  <label className="textIn">Anniversaire :</label>
                  <input
                    className="inputTxtIn"
                    type="date"
                    placeholder="anniversaire"
                    value={anniversaire}
                    onChange={(e) => setAnniversaire(e.target.value)}
                  />
                </li>
                <li>
                  <label className="textIn">Mot de passe :</label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="mot de passe"
                    value={motdepasse}
                    onChange={(e) => setMotdepasse(e.target.value)}
                  />
                </li>
                <li>
                  <label className="textIn">E-mail :</label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <label className="textIn">Date d'embauche :</label>
                  <input
                    className="inputTxtIn"
                    type="date"
                    placeholder="date embauche"
                    value={dateembauche}
                    onChange={(e) => setDateembauche(e.target.value)}
                  />
                </li>
                <li>
                  <label className="textIn">Administrateur ?</label>
                  <input
                    className="inputTxtIn"
                    type="checkbox"
                    checked={setAdmin}
                  />
                </li>
                <li>
                  <label className="textIn">Service :</label>
                  <input
                    className="inputTxtIn"
                    type="number"
                    placeholder="service"
                    value={serviceIdservice}
                    onChange={(e) => setServiceIdservice(e.target.value)}
                  />
                </li>
                <li>
                  <label className="textIn">Fonction :</label>
                  <input
                    className="inputTxtIn"
                    type="number"
                    placeholder="fonction"
                    value={fonctionIdfonction}
                    onChange={(e) => setFonctionIdfonction(e.target.value)}
                  />
                </li>
              </div>

              <li>
                <button type="submit" className="BtnIns">
                  Inscrire
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inscrire;
