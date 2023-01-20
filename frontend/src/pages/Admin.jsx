import React from "react";
import { NavLink } from "react-router-dom";
import Header2 from "@components/Header2";

function Admin() {
  return (
    <div>
      <div>
        <div>
          <Header2 />
          <h1 className="titre">Bienvenue Administrateur</h1>
        </div>
        <div className="formAdmin">
          <ul>
            <li className="linkadmin">
              <NavLink to="/admin/inscrire">inscrire un collaborateur</NavLink>
            </li>
            <li className="linkadmin">
              <NavLink to="/admin/supprimer">
                supprimer un collaborateur
              </NavLink>
            </li>
            <li className="linkadmin">
              <NavLink to="/admin/modifier">modifier un collaborateur</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
