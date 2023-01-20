import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Supprimer() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  /*  const handleNom = (e) => {
    e.preventDefault(); */

  axios
    .post("http://localhost:5005/api/utilisateur/supprimer", { nom, prenom })

    .then((res) => {
      res.status(500).send(res);
    })

    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      <div>
        <h1>Supprimer un collaborateur</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/admin/inscrire">inscrire un collaborateur</NavLink>
          </li>
          <li>
            <NavLink to="/admin/modifier">modifier un collaborateur</NavLink>
          </li>
        </ul>
        <div>
          <div>
            <form onSubmit="delete">
              <ul>
                <li>
                  <label htmlFor="text">Nom du Collaborateur :</label>
                  <input
                    type="text"
                    placeholder="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </li>

                <li>
                  <label htmlFor="text">Prénom du collaborateur :</label>
                  <input
                    type="text"
                    placeholder="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </li>

                <li>
                  <button type="submit">supprimer</button>
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
