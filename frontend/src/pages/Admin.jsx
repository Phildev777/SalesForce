import React from "react";
import { NavLink } from "react-router-dom";
import Header from "@components/Header";
import "../assets/styles/admin.css";

function Admin() {
  return (
    <div className="main">
      <div className="for">
        <div>
          <Header />
          <div>
            <div className="titleAdmin">Bienvenue Administrateur</div>
          </div>
          <div className="selection">
            <ul className="List">
              <li>
                <NavLink to="/admin/inscrire" className="linkadmin">
                  inscrire un collaborateur
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/supprimer" className="linkadmin">
                  supprimer un collaborateur
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
