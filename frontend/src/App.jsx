import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Connexion from "@pages/Connexion";
import Header from "@components/Header";

import axios from "axios";

import Admin from "./pages/Admin";
import Idees from "./pages/Idees";
import Services from "./pages/Services";
import Utilisateurs from "./pages/Utilisateurs";
import Monespace from "./pages/Monespace";
import "./App.css";

import UserContext from "./contexts/UserContext";

function App() {
  const location = useLocation();

  const [user, setUser] = useState({
    token: "",

    isAdmin: "",

    id: "",
  });

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
          console.warn(res.data);
          setUser(res.data);
        });
    }
  }, []);

  return (
    <div><UserContext.Provider value={{user, setUser}}>
      {location.pathname !== "/" && <Header/>}

      {location.pathname === "/admin/modifier" && <Header />}
      {location.pathname === "/admin/supprimer" && <Header />}
      {location.pathname === "/admin/inscrire" && <Header />}
      
        <Routes>
          <Route path="/" element={<Connexion  />} />
          
          <Route path="/mon espace" element={<Monespace />} />
          <Route path="/idees" element={<Idees />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
