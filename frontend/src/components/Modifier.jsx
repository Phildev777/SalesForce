import React from "react";
import { NavLink } from "react-router-dom";

function Modifier() {
  return (
    <div>
      <div>
        <h1>Modifier un collaborateur</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/admin/inscrire">inscrire un collaborateur</NavLink>
          </li>
          <li>
            <NavLink to="/admin/supprimer">supprimer un collaborateur</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modifier;
