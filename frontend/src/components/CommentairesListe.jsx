import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Commentaires from "./Commentaires";
import "../assets/styles/CommentairesListe.css";
import UserContext from "../contexts/UserContext";

function CommentairesListe({
  showCommentaires,
  tabCommentaires,
  id,
  getComments,
}) {
  const { user } = useContext(UserContext);

  const [detail, setDetail] = useState();

  const handleComment = (e) => {
    setDetail(e.target.value);
    if (e.key === "Enter") {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/commentaire/create`, {
          detail,
          utilisateurIdutilisateur: user.id,
          ideeIdidee: id,
        })
        .then(() => getComments());
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
  id: PropTypes.number.isRequired,
  tabCommentaires: PropTypes.node.isRequired,
  getComments: PropTypes.func.isRequired,
};

export default CommentairesListe;
