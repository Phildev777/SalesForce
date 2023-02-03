import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../assets/styles/inscrire.css";
import PropTypes from "prop-types";

function Modal({ show, onClose }) {
  const [showModal, setShowModal] = useState(show);

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  return (
    showModal && (
      <div>
        <div className="pop">
          <p className="txtPop">Enregistrement Effectué</p>
          <button
            type="button"
            onClick={() => onClose(false)}
            className="BtnPop"
          >
            Fermer
          </button>
        </div>
      </div>
    )
  );
}

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
  const [modalShow, setModalShow] = useState(false);

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

    setModalShow(true);
  };

  return (
    <div className="main">
      <div>
        <div className="titleIns">Inscrire un Collaborateur</div>
      </div>
      <div className="selec">
        <div>
          <Modal show={modalShow} onClose={setModalShow} />
        </div>

        <div>
          <form onSubmit={handleNom}>
            <ul>
              <div className="formIns">
                <li>
                  <label htmlFor="txt" className="textIn">
                    Nom du collaborateur :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </li>

                <li>
                  <label htmlFor="txt" className="textIn">
                    Prénom du collaborateur :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="prénom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="txt" className="textIn">
                    Anniversaire :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="date"
                    placeholder="anniversaire"
                    value={anniversaire}
                    onChange={(e) => setAnniversaire(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="txt" className="textIn">
                    Mot de passe :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="mot de passe"
                    value={motdepasse}
                    onChange={(e) => setMotdepasse(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="txt" className="textIn">
                    E-mail :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="text"
                    placeholder="e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="txt" className="textIn">
                    Date d'embauche :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="date"
                    placeholder="date embauche"
                    value={dateembauche}
                    onChange={(e) => setDateembauche(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="txt" className="textIn">
                    Administrateur ?
                  </label>
                  <input
                    className="inputTxtIn"
                    type="checkbox"
                    checked={admin}
                    onChange={(e) => setAdmin(e.target.checked)}
                  />
                </li>
                <li>
                  <label htmlFor="txt" className="textIn">
                    Service :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="number"
                    placeholder="N° service selectionné"
                    value={serviceIdservice}
                    onChange={(e) => setServiceIdservice(e.target.value)}
                  />
                  <select className="inputTxtIn">
                    <option value="R&D">1- Recherche et Développement</option>
                    <option value="Compta">2- Comptabilité</option>
                    <option value="Secret">3- Secretariat</option>
                    <option value="Commercial">4- Commercial</option>
                    <option value="Encadrement">5- Encadrement</option>
                    <option value="Marketing">6- Marketing</option>
                    <option value="Entretien">7- Entretien</option>
                    <option value="Relation">8- Relation Clientèle</option>
                    <option value="Expédition">9- Expédition</option>
                    <option value="Réception">10- Réception</option>
                    <option value="Relations">11- Relations Humaines</option>
                    <option value="Logistique">12- Logistique</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="txt" className="textIn">
                    Fonction :
                  </label>
                  <input
                    className="inputTxtIn"
                    type="number"
                    placeholder="fonction"
                    value={fonctionIdfonction}
                    onChange={(e) => setFonctionIdfonction(e.target.value)}
                  />

                  <select className="inputTxtIn">
                    <option value="Employé">1- Employé</option>
                    <option value="Commercial">2- Commercial</option>
                    <option value="Secretaire">3- Secrétaire</option>
                    <option value="RH">4- RH</option>
                    <option value="Comptable">5- Comptable</option>
                    <option value="Manager">6- Manager</option>
                    <option value="ChefDequipe">7- Chef d'équipe</option>
                    <option value="PDG">8- PDG</option>
                  </select>
                </li>
              </div>

              <li>
                <button type="submit" className="BtnIns">
                  Inscrire
                </button>
              </li>
            </ul>
          </form>
          <ul className="ulIns">
            <li>
              <NavLink to="/admin/supprimer" className="linkIn">
                Supprimer un collaborateur
              </NavLink>
            </li>
            {/*    <li>
            <NavLink to="/admin/modifier"className="linkIn">modifier un collaborateur</NavLink>
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Inscrire;
