import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import MainContainer from "@components/MainContainer"; */
import Header from "./components/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Idees from "./pages/Idees";
import Services from "./pages/Services";
import Utilisateurs from "./pages/Utilisateurs";
import Monespace from "./pages/Monespace";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mon_espace" element={<Monespace />} />
          <Route path="/idees" element={<Idees />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
