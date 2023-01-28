// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Commentaires from "./Commentaires";
// import "../assets/styles/CommentairesListe.css";

// function CommentairesListe({ showCommentaires }) {
//   const tabCommentaires = [
//     {
//       id: 1,
//       photo: "",
//       nom: "Pierre Durand",
//       date: "02/03/2022",
//       texte: "kljg klf ngjnq ndclndk jndkv sdbvjkds",
//     },

//     {
//       id: 2,
//       photo: "",
//       nom: "Paul Simon",
//       date: "02/03/2022",
//       texte: "kljg klf ngjnq ndclndk jndkv sdbvjkds",
//     },

//     {
//       id: 3,
//       photo: "",
//       nom: "Jean Hume",
//       date: "02/03/2022",
//       texte: "kljg klf ngjnq ndclndk jndkv sdbvjkds",
//     },

//     {
//       id: 4,
//       photo: "",
//       nom: "Isabelle Dupuis",
//       date: "02/03/2022",
//       texte:
//         "kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds",
//     },

//     {
//       id: 5,
//       photo: "",
//       nom: "Pierre Durand",
//       date: "02/03/2022",
//       texte:
//         "kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds",
//     },
//   ];

//   return (
//     <div className="commentaireListe">
//       <div className="comms">
//         {tabCommentaires.map((i) => (
//           <Commentaires key={i.id} nom={i.nom} date={i.date} texte={i.texte} />
//         ))}
//       </div>
//       <div className="insererCommentaire">
//         <textarea placeholder="Tapez votre commentaire" />
//       </div>
//       <div
//         className="fermetureCommentaires"
//         onClick={showCommentaires}
//         role="button"
//         onKeyDown={showCommentaires}
//         tabIndex={0}
//       >
//         Fermer
//       </div>
//     </div>
//   );
// }

// CommentairesListe.propTypes = {
//   showCommentaires: PropTypes.func.isRequired,
// };

// export default CommentairesListe;

/// //////////////////////////////////////////////////////

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Commentaires from "./Commentaires";
import "../assets/styles/CommentairesListe.css";
import UserContext from "../contexts/UserContext";

function CommentairesListe({ showCommentaires, ideeIdidee }) {
  const { user } = useContext(UserContext);

  const [tabCommentaires, setTabCommentaires] = useState([]);

  const getComments = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/commentaire/`)
      .then((res) => {
        setTabCommentaires(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  const [detail, setDetail] = useState();

  const handleComment = (e) => {
    setDetail(e.target.value);

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/commentaire/create`, {
      detail,
      utilisateurIdutilisateur: user.id,
      ideeIdidee,
    });
  };

  return (
    <div className="commentaireListe">
      <div className="comms">
        {tabCommentaires.map((i) => (
          <Commentaires
            key={i.id}
            nom={i.user.id}
            date={i.date}
            texte={i.detail}
          />
        ))}
      </div>
      <div className="insererCommentaire">
        <textarea
          placeholder="Tapez votre commentaire"
          value={detail}
          onChange={handleComment}
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
