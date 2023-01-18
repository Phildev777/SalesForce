import React, { useState } from "react";
import UtilisateurCarte from "@components/UtilisateurCarte";
import "../assets/styles/Utilisateurs.css";
import magnifier from "@assets/magnifier.svg";
import axios from "axios";

function Utilisateurs() {
  const [searchBar, setSearchBar] = React.useState("");
  const [selectService, setSelectService] = React.useState(null);
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

  let db = [
    {
      id: "0",
      firstname: "lucie",
      lastname: "Margot",
      service: "comptabilité",
    },
    {
      id: "1",
      firstname: "Margot",
      lastname: "Robbie",
      service: "developpement",
    },
    {
      id: "2",
      firstname: "George",
      lastname: "Dubois",
      service: "commercial",
    },
    {
      id: "3",
      firstname: "lucie",
      lastname: "Margot",
      service: "comptabilité",
    },
    {
      id: "4",
      firstname: "Kevin",
      lastname: "Leboucher",
      service: "developpement",
    },
    {
      id: "5",
      firstname: "lucie",
      lastname: "Margot",
      service: "compa",
    },
    {
      id: "6",
      firstname: "lucie",
      lastname: " Grddghfz",
      service: "compa",
    },
    {
      id: "7",
      firstname: "Jeanne",
      lastname: "Arc",
      service: "compa",
    },
    {
      id: "8",
      firstname: "Tra",
      lastname: "je",
      service: "compa",
    },
    {
      id: "9",
      firstname: "Patrick",
      lastname: "etoile",
      service: "compa",
    },

    {
      id: "10",
      firstname: "François",
      lastname: "Dupont",
      service: "compa",
    },
    {
      id: "11",
      firstname: "Baptiste",
      lastname: "Mathieu",
      service: "compa",
    },
  ];
  const [dataUser, setDataUser] = React.useState([])


  const fef = () => {
    axios
      .get("http://localhost:5005/api/utilisateur/test")
      .then((res) => {
        console.log(res.data);
        setDataUser(res.data)
      })
      .catch((err) => console.log(err))

  }


  React.useEffect(() => {
    fef()
  }, [])

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
          <div className="filterBar">
            <div className="searchBar">
              <input
                className="inputSearchBar"
                type="text"
                onChange={(e) => setSearchBar(e.target.value.toLowerCase())}
                placeholder="........."
                value={searchBar}
              />
              <img src={magnifier} alt="loupe" />
            </div>
          </div>

          <div className="utilisateursContainer">
            {dataUser /* .filter((data) => data.service == "commercial") */
              .filter((data) => {
                const tmp = searchBar.toLocaleLowerCase();
                return (
                  data.prenom.toLowerCase().includes(tmp) ||
                  data.nom.toLowerCase().includes(tmp)
                );
              })
              .map((data) => (
                <UtilisateurCarte
                  key={data.id}
                  firstname={data.prenom}
                  lastname={data.username}
                  service={data.serviceName}
                />
              ))}
          </div>
        </div>
      )}

      {ongletTous && (
        <div className="mainContent">
          <div className="filterBar">
            <div className="searchBar">
              <input
                className="inputSearchBar"
                type="text"
                onChange={(e) => setSearchBar(e.target.value.toLowerCase())}
                placeholder="........."
                value={searchBar}
              />
              <img src={magnifier} alt="loupe" />
            </div>
            <select
              id="selectService"
              className="selectService"
              onChange={(e) => setSelectService(e.target.value.toLowerCase())}
            >
              <option value="">choisir un service</option>
              <option value="commercial">commercial</option>
              <option value="compa">comptable</option>
              <option value="developpement">developpement</option>
              <option value="rh">ressource humaine</option>
            </select>
          </div>
          <div className="utilisateursContainer">
            {db
              .filter((data) =>
                selectService ? data.service === selectService : true
              )

              .filter((data) => {
                const tmp = searchBar.toLocaleLowerCase();
                return (
                  data.firstname.toLowerCase().includes(tmp) ||
                  data.lastname.toLowerCase().includes(tmp)
                );
              })
              .map((data) => (
                <UtilisateurCarte
                  key={data.id}
                  firstname={data.firstname}
                  lastname={data.lastname}
                  service={data.service}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Utilisateurs;
