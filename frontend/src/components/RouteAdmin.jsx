import React from "react";
import { Routes, Route } from "react-router-dom";
import Inscrire from "@components/Inscrire";
import Supprimer from "@components/Supprimer";
import Modifier from "@components/Modifier";
import "../assets/styles/admin.css";

function RouteAdmin() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/admin/inscrire" element={<Inscrire />} />
          <Route path="/admin/supprimer" element={<Supprimer />} />
          <Route path="/admin/modifier" element={<Modifier />} />
        </Routes>
      </div>
    </div>
  );
}

export default RouteAdmin;
