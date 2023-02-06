import React, { useState, useEffect, useContext } from "react";
import UtilisateurCarte from "@components/UtilisateurCarte";
import "../assets/styles/Utilisateurs.css";
import magnifier from "@assets/magnifier.svg";
import axios from "axios";
import MyProfile from "@components/MyProfile";
import UserContext from "../contexts/UserContext";

function Utilisateurs() {
  const [canWrite, setCanWrite] = useState(true);
  const [, /* bioText */ setBioText] = useState();
  const [dataIdea /* setDataIdea */] = useState();

  const [searchBar, setSearchBar] = useState("");
  const [selectService, setSelectService] = useState("");
  const [ongletService, setOngletService] = useState(true);
  const [ongletTous, setOngletTous] = useState(false);
  const [, /* profileCard */ setProfileCard] = useState(false);
  const [dataProfileCard, setDataProfileCard] = useState(null);
  const [dataUser, setDataUser] = useState([]);
  const userContext = useContext(UserContext);
  const [dataUserId, setDataUserId] = useState([]);
  const [dataService, setDataService] = useState([]);

  const handleOngletService = () => {
    setOngletService(true);
    setOngletTous(false);
    setProfileCard(false);
    setDataProfileCard(false);
  };
  const handleOngletTous = () => {
    setOngletService(false);
    setOngletTous(true);
    setProfileCard(false);
    setDataProfileCard(false);
  };

  const handleProfileCard = (data) => {
    setOngletService(false);
    setOngletTous(false);
    setProfileCard(true);
    setDataProfileCard(data);
  };

  const getAll = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/service`)
      .then((res) => {
        setDataService(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getUtilisateurById = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/ui/${
          userContext.user.id
        }`
      )
      .then((res) => {
        setDataUserId(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fef = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/test`)
      .then((res) => {
        setDataUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAll();
    getUtilisateurById();
    fef();
  }, [userContext.user.id]);

  // console.log(dataUserId[0].serviceName)

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
            {dataUser
              .filter(
                (data) => data.serviceName === dataUserId?.[0]?.serviceName
              )
              .filter((data) => {
                const tmp = searchBar.toLocaleLowerCase();
                return (
                  data?.prenom?.toLowerCase().includes(tmp) ||
                  data?.nom?.toLowerCase().includes(tmp)
                );
              })
              .map((data) => (
                <UtilisateurCarte
                  key={data.id}
                  firstname={data.prenom}
                  lastname={data.username}
                  service={data.serviceName}
                  avatar={data.avatar}
                  displayProfileCard={handleProfileCard}
                  dateembauche={data.dateembauche}
                  anniversaire={data.anniversaire}
                  email={data.email}
                  biographie={data.biographie}
                />
              ))}
          </div>
        </div>
      )}
      {/* {console.log(dataProfileCard)} */}
      {dataProfileCard && (
        <div className="mainContent">
          <MyProfile
            /* eslint-disable */

            {...dataProfileCard}
            /* eslint-enable */
            previewImage={() => {}}
            canWrite={canWrite}
            setCanWrite={setCanWrite}
            setBioText={setBioText}
            changeBiography={() => {}}
            dataIdea={dataIdea}
            editable={false}
          />
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
              value={selectService}
              onChange={(e) => setSelectService(e.target.value.toLowerCase())}
            >
              <option value="">Select service</option>
              {dataService.map((e) => {
                return <option key={e.id}>{e.nomservice}</option>;
              })}
            </select>
          </div>
          <div className="utilisateursContainer">
            {dataUser
              .filter((data) =>
                selectService
                  ? data.serviceName.toLocaleLowerCase() === selectService
                  : true
              )

              .filter((data) => {
                const tmp = searchBar.toLocaleLowerCase();
                return (
                  data.prenom.toLowerCase().includes(tmp) ||
                  data.username.toLowerCase().includes(tmp)
                );
              })
              .map((data) => {
                return (
                  <UtilisateurCarte
                    key={data.id}
                    firstname={data.prenom}
                    lastname={data.username}
                    service={data.serviceName}
                    avatar={data.avatar}
                    displayProfileCard={(d) => handleProfileCard(d)}
                    dateembauche={data.dateembauche}
                    anniversaire={data.anniversaire}
                    email={data.email}
                    biographie={data.biographie}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Utilisateurs;
