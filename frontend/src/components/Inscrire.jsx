import React from "react";
import { NavLink } from "react-router-dom";

function Inscrire() {
  return (
    <div>
      <div>
        <h1>Inscrire un Collaborateur</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/admin/supprimer">supprimer un collaborateur</NavLink>
          </li>
          <li>
            <NavLink to="/admin/modifier">modifier un collaborateur</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Inscrire;
