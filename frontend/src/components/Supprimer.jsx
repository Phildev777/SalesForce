import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../assets/styles/supprimer.css";

function Supprimer() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleNom = (e) => {
    e.preventDefault();

    axios
      .delete(
        `http://localhost:5005/api/utilisateur/supprimer/${nom}/${prenom}`
      )

      .then((res) => {
        console.warn(res.data);
      })

      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="main">
      <div className="for">
        <div className="titleSupp">Supprimer un collaborateur</div>
      </div>
      <div className="select">
        <ul className="ulAdmin">
          <li>
            <NavLink to="/admin/inscrire" className="linkSu">
              inscrire un collaborateur
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/admin/modifier" className="linkSu">modifier un collaborateur</NavLink>
          </li> */}
        </ul>
        <div>
          <div>
            <form onSubmit={handleNom}>
              <ul>
                <div className="formSup">
                  <li>
                    <label className="textSu" id="NmC">
                      Nom du Collaborateur :
                    </label>
                    <input
                      className="inputTxt"
                      type="text"
                      placeholder="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </li>

                  <li>
                    <label className="textSu">Prénom du collaborateur :</label>
                    <input
                      className="inputTxt"
                      type="text"
                      placeholder="prenom"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                  </li>
                </div>
                <li>
                  <button type="submit" className="BtnSup">
                    supprimer
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supprimer;
