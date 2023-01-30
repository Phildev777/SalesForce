import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import avatar from "../assets/avatar1.svg";
import "../assets/styles/Commentaires.css";

function Commentaires({ date, texte, id }) {
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

  const [userBycomment, setUserByComment] = useState([]);
  const select = id;
  const getUserBycomment = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/commentaire/detailcommentaire/${select}`
      )
      .then((res) => {
        setUserByComment(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUserBycomment();
  }, []);

  return (
    <div className="commentairesContainer">
      <div className="infoUser">
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <div className="userAndDate">
          <div>
            <div className="user">
              {userBycomment.prenom} {userBycomment.nom}
            </div>
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
            <svg
              width="30"
              height="15"
              viewBox="0 0 63 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_274_8)">
                <path
                  d="M59 18.9C59 16.569 56.75 14.7 54 14.7H38.2L40.6 5.103C40.65 4.893 40.675 4.662 40.675 4.431C40.675 3.57 40.25 2.772 39.575 2.205L36.925 0L20.475 13.818C19.55 14.595 19 15.645 19 16.8V37.8C19 38.9139 19.5268 39.9822 20.4645 40.7698C21.4021 41.5575 22.6739 42 24 42H46.5C48.575 42 50.35 40.95 51.1 39.438L58.65 24.633C58.875 24.15 59 23.646 59 23.1V18.9ZM4 42H14V16.8H4V42Z"
                  fill="var(--primary-color)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_274_8"
                  x="0"
                  y="0"
                  width="63"
                  height="50"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_274_8"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_274_8"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            {likesCom}
          </div>
        </div>
      </div>

      <div className="texte">{texte}</div>
    </div>
  );
}

Commentaires.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default Commentaires;
