import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../assets/styles/supprimer.css";


const Modal = ({show, onClose}) => {
  
  const [showModal, setShowModal] = useState(show);
  
  useEffect(()=>{
  
  setShowModal(show);
  
  },[show]);
  
  
  return (
    showModal && (
  <div> 
  <div className="pop">
  <p className="txtPop">Suppression Effectuée</p>
  <button onClick={()=> onClose(false)} className="BtnPop">Fermer</button>
  </div>
  </div>
  )
  );
      
    };

function Supprimer() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const handleNom = (e) => {
    e.preventDefault();

    axios
      .delete(
        `http://localhost:5005/api/utilisateur/supprimer/${nom}/${prenom}`
      )

      .then((res) => {
        console.warn(res.data);
      })

      .catch((err) => {
        console.error(err);
      });
      setModalShow(true);
  };
  return (
    <div className="main">
      <div className="for">
        <div className="titleSupp">Supprimer un collaborateur</div>
      </div>
      <div className="select">
       
      <div>
                        
                        <Modal show={modalShow} onClose={setModalShow} />
    
                      </div>
       
        <div>
          <div>
            <form onSubmit={handleNom}>
              <ul>
                <div className="formSup">
                  <li>
                    <label className="textSu" id="NmC">
                      Nom du collaborateur :
                    </label>
                    <input
                      className="inputTxt"
                      type="text"
                      placeholder="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </li>

                  <li>
                    <label className="textSu">Prénom du collaborateur :</label>
                    <input
                      className="inputTxt"
                      type="text"
                      placeholder="prénom"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                  </li>
                </div>
                <li>
                  <button type="submit" className="BtnSup">
                    Supprimer
                  </button>
                </li>
                <li>
            <NavLink to="/admin/inscrire" className="linkSu">
              Inscrire un Collaborateur
            </NavLink>
          </li>
            {/*  <li>
            <NavLink to="/admin/modifier" className="linkSu">modifier un collaborateur</NavLink>
          </li>  */}
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supprimer;
