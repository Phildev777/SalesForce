import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Connexion from "@pages/Connexion";
import Header from "@components/Header";
import Header2 from "@components/Header2";
import axios from "axios";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Idees from "./pages/Idees";
import Services from "./pages/Services";
import Utilisateurs from "./pages/Utilisateurs";
import Monespace from "./pages/Monespace";
import "./App.css";

function App() {
  const location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken !== undefined) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/token/user`, {
          headers: {
            Authorization: `${storedToken}`,
          },
        })
        .then((res) => {
          setUser(res.data).send({ user });
        });
    }
  }, []);

  return (
    <div>
      {location.pathname !== "/" && <Header />}

      {location.pathname === "/admin/modifier" && <Header2 />}
      {location.pathname === "/admin/supprimer" && <Header2 />}
      {location.pathname === "/admin/inscrire" && <Header2 />}

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
