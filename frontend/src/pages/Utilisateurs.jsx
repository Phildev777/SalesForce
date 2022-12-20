import React from "react";
import UtilisateurCarte from "@components/UtilisateurCarte";
import "../assets/styles/Utilisateurs.css";

function Utilisateurs() {
  const [searchBar, setSearchBar] = React.useState("");
  const [ongletService, setOngletService] = React.useState(true);
  const [ongletTous, setOngletTous] = React.useState(false);

  const handleOngletService = () => {
    setOngletService(true);
    setOngletTous(false);
  };
  const handleOngletTous = () => {
    setOngletService(false);
    setOngletTous(true);
  };
  return (
    <div className="containerfull">
      <div className="onglets">
        <button type="button" onClick={handleOngletService}>
          Mon service
        </button>
        <button type="button" onClick={handleOngletTous}>
          Tous
        </button>
      </div>
      {ongletService && (
        <div className="mainContent">
          <div>
            <input
              type="text"
              onChange={(e) => setSearchBar(e.target.value)}
              placeholder="............"
              value={searchBar}
            />
          </div>
          <div className="utilisateursContainer">
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
            <UtilisateurCarte />
          </div>
        </div>
      )}
      {ongletTous && <p>contenue</p>}
    </div>
  );
}

export default Utilisateurs;
