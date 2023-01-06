import React from "react";
import Commentaires from "./Commentaires";
import "../assets/styles/CommentairesListe.css";

function CommentairesListe() {
  const tabCommentaires = [
    {
      id: 1,
      photo: "",
      nom: "Pierre Durand",
      date: "02/03/2022",
      texte: "kljg klf ngjnq ndclndk jndkv sdbvjkds",
    },

    {
      id: 2,
      photo: "",
      nom: "Paul Simon",
      date: "02/03/2022",
      texte: "kljg klf ngjnq ndclndk jndkv sdbvjkds",
    },

    {
      id: 3,
      photo: "",
      nom: "Jean Hume",
      date: "02/03/2022",
      texte: "kljg klf ngjnq ndclndk jndkv sdbvjkds",
    },

    {
      id: 4,
      photo: "",
      nom: "Isabelle Dupuis",
      date: "02/03/2022",
      texte:
        "kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds",
    },

    {
      id: 5,
      photo: "",
      nom: "Pierre Durand",
      date: "02/03/2022",
      texte:
        "kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds kljg klf ngjnq ndclndk jndkv sdbvjkds",
    },
  ];

  return (
    <div className="commentaireListe">
      <div className="comms">
        {tabCommentaires.map((i) => (
          <Commentaires key={i.id} nom={i.nom} date={i.date} texte={i.texte} />
        ))}
      </div>
      <div className="insererCommentaire">
        <textarea placeholder="Tapez votre commentaire" />
      </div>
    </div>
  );
}

export default CommentairesListe;
