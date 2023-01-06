import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Connexion from "@pages/Connexion";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Idees from "./pages/Idees";
import Services from "./pages/Services";
import Utilisateurs from "./pages/Utilisateurs";
import Monespace from "./pages/Monespace";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mon espace" element={<Monespace />} />
        <Route path="/idees" element={<Idees />} />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
