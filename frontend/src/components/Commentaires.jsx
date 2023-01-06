import React, { useState } from "react";
import PropTypes from "prop-types";

import avatar from "../assets/avatar1.svg";
import "../assets/styles/Commentaires.css";
import likeIcon from "../assets/likeIcon.svg";

function Commentaires({ nom, date, texte }) {
  const [likesCom, setLikesCom] = useState(0);
  const [isLikedCom, setIslikedCom] = useState(false);

  const addLikesCom = () => {
    if (!isLikedCom) {
      setLikesCom(likesCom + 1);
    } else {
      setLikesCom(likesCom - 1);
    }

    setIslikedCom(!isLikedCom);
  };

  return (
    <div className="commentairesContainer">
      <div className="infoUser">
        <div className="userAndDate">
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <div>
            <div className="user">{nom}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="like">
          <div
            onClick={addLikesCom}
            role="button"
            onKeyDown={addLikesCom}
            tabIndex={0}
          >
            <img src={likeIcon} alt="likesicon" />
            {likesCom}
          </div>
        </div>
      </div>

      <div className="texte">{texte}</div>
    </div>
  );
}

Commentaires.propTypes = {
  nom: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default Commentaires;
