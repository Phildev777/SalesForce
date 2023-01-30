import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Commentaires from "./Commentaires";
import "../assets/styles/CommentairesListe.css";
import UserContext from "../contexts/UserContext";

function CommentairesListe({ showCommentaires, ideeIdidee }) {
  const { user } = useContext(UserContext);

  const [tabCommentaires, setTabCommentaires] = useState([]);
  const noIdee = ideeIdidee;
  const getComments = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/commentaire/${noIdee}`)
      .then((res) => {
        setTabCommentaires(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getComments();
  }, [tabCommentaires]);

  const [detail, setDetail] = useState();

  const handleComment = (e) => {
    setDetail(e.target.value);
    if (e.key === "Enter") {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/commentaire/create`, {
        detail,
        utilisateurIdutilisateur: user.id,
        ideeIdidee,
      });
      setDetail("");
    }
  };

  return (
    <div className="commentaireListe">
      {tabCommentaires.length === 0 ? (
        <div className="noComment">Pas de commentaires pour l'instant</div>
      ) : (
        <div className="comms">
          {tabCommentaires.map((i) => (
            <Commentaires
              key={i.idcommentaire}
              id={i.idcommentaire}
              nom={i.utilisateur_idutilisateur}
              date={i.date}
              texte={i.detail}
            />
          ))}
        </div>
      )}

      <div className="insererCommentaire">
        <textarea
          placeholder="Tapez votre commentaire"
          value={detail}
          onChange={handleComment}
          onKeyDown={handleComment}
        />
      </div>
      <div
        className="fermetureCommentaires"
        onClick={showCommentaires}
        role="button"
        onKeyDown={showCommentaires}
        tabIndex={0}
      >
        Fermer
      </div>
    </div>
  );
}

CommentairesListe.propTypes = {
  showCommentaires: PropTypes.func.isRequired,
  ideeIdidee: PropTypes.number.isRequired,
};

export default CommentairesListe;
