import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CommentairesListe from "./CommentairesListe";
import UserContext from "../contexts/UserContext";

import "../assets/styles/Idee.css";
import imagebg from "../assets/backgroundIdee.png";
import avatar from "../assets/avatar1.svg";

function Idee({
  id,
  titre,
  description,
  modified,
  published,
  theme,
  selected,
  setSelected,
}) {
  const handleOpen = (e) => {
    e.stopPropagation();
    setSelected(id);
  };

  const { user } = useContext(UserContext);

  const [commentaires, setCommentaires] = useState(false);

  const showCommentaires = () => {
    setCommentaires(!commentaires);
  };

  const handleClosed = (e) => {
    e.stopPropagation();
    setSelected(null);
    setCommentaires(false);
  };

  const [likesIdea, setLikesIdea] = useState(0);
  const [isLikedIdea, setIslikedIdea] = useState(false);

  const addLikesIdea = () => {
    if (!isLikedIdea) {
      setLikesIdea(likesIdea + 1);
    } else {
      setLikesIdea(likesIdea - 1);
    }

    setIslikedIdea(!isLikedIdea);
  };

  const [userByIdea, setUserByIdea] = useState([]);
  const select = selected;
  const getUserByIdea = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/idee/userbyidea/${select}`)
      .then((res) => {
        setUserByIdea(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (select && select === id) getUserByIdea();
  }, [select]);

  const [ideamodified /* setIdeaModified */] = useState(false);

  const [tabCommentaires, setTabCommentaires] = useState([]);
  const getComments = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/commentaire/${id}`)
      .then((res) => {
        setTabCommentaires(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getComments();
  }, []);

  const [isFav, setIsFav] = useState(false);

  const handleFav = () => {
    if (!isFav) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/favoris/`, {
          utilisateurIdutilisateur: user.id,
          ideeIdidee: selected,
        })
        .then(() => {
          console.warn(user.id);
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .delete(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/favoris?utilisateurIdutilisateur=${
            user.id
          }&ideeIdidee=${selected}`
        )
        .then((res) => {
          console.warn(res);
        })
        .catch((err) => console.error(err));
    }
    setIsFav(!isFav);
  };

  return (
    <div
      className="ideaContainer"
      onClick={handleOpen}
      role="button"
      onKeyDown={handleOpen}
      tabIndex={0}
    >
      {!selected || id !== selected ? (
        <div className="titleContainerSmall">
          <div className="titleIdeaSmall">
            <div className="avatar1">
              {" "}
              <img src={avatar} alt="avatar" />
            </div>
            {titre}{" "}
            {isFav ? (
              <svg
                width="35"
                height="20"
                viewBox="0 0 70 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 53.0432L56.63 66L50.89 41.58L70 25.1495L44.835 22.9958L35 0L25.165 22.9958L0 25.1495L19.075 41.58L13.37 66L35 53.0432Z"
                  fill="var(--secondary-color)"
                />
              </svg>
            ) : (
              <svg
                width="35"
                height="20"
                viewBox="0 0 47 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7722 38.1574L23.5 37.9808L23.2278 38.1574L9.7212 46.9211L13.2963 30.3454L13.3561 30.068L13.1486 29.8744L1.15625 18.6855L16.9426 17.2221L17.2487 17.1937L17.3616 16.9078L23.5 1.36145L29.6384 16.9078L29.7513 17.1937L30.0573 17.2221L45.8424 18.6854L33.8282 29.8741L33.62 30.068L33.6804 30.346L37.277 46.9199L23.7722 38.1574Z"
                  stroke="var(--primary-color)"
                />
              </svg>
            )}
          </div>
          <div className="publishedAndModifiedSmall">
            <div className="publishedSmall">Publiée le : {published}</div>

            {ideamodified ? (
              <div className="modifiedIdeaSmall">Modifiée le : {modified}</div>
            ) : null}
          </div>
          <div className="commentsandlikesSmall">
            <svg
              width="30"
              height="15"
              viewBox="0 0 71 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.85 59C23.9085 59 23.0055 58.6892 22.3398 58.136C21.674 57.5827 21.3 56.8324 21.3 56.05V47.2H7.1C5.21696 47.2 3.41105 46.5784 2.07954 45.4719C0.748033 44.3655 0 42.8648 0 41.3V5.9C0 2.6255 3.195 0 7.1 0H63.9C65.783 0 67.5889 0.621605 68.9205 1.72807C70.252 2.83453 71 4.33522 71 5.9V41.3C71 42.8648 70.252 44.3655 68.9205 45.4719C67.5889 46.5784 65.783 47.2 63.9 47.2H42.245L29.11 58.1445C28.4 58.705 27.5125 59 26.625 59H24.85ZM10.65 8.85V14.75H60.35V8.85H10.65ZM10.65 20.65V26.55H39.05V20.65H10.65ZM10.65 32.45V38.35H46.15V32.45H10.65Z"
                fill="var(--primary-color)"
              />
            </svg>{" "}
            {tabCommentaires.length}{" "}
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
            </svg>{" "}
            {likesIdea}
          </div>
        </div>
      ) : (
        <div className="ideaContainerBig">
          <div className="leftContent">
            <div className="titleContainerBig">
              <div className="avatarTitleFavIcon">
                <div className="avatar1">
                  {" "}
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="titleIdeaBig">{titre}</div>
                <div
                  onClick={handleFav}
                  role="button"
                  onKeyDown={handleFav}
                  tabIndex={0}
                >
                  {isFav ? (
                    <svg
                      width="35"
                      height="20"
                      viewBox="0 0 70 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35 53.0432L56.63 66L50.89 41.58L70 25.1495L44.835 22.9958L35 0L25.165 22.9958L0 25.1495L19.075 41.58L13.37 66L35 53.0432Z"
                        fill="var(--secondary-color)"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="35"
                      height="20"
                      viewBox="0 0 47 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.7722 38.1574L23.5 37.9808L23.2278 38.1574L9.7212 46.9211L13.2963 30.3454L13.3561 30.068L13.1486 29.8744L1.15625 18.6855L16.9426 17.2221L17.2487 17.1937L17.3616 16.9078L23.5 1.36145L29.6384 16.9078L29.7513 17.1937L30.0573 17.2221L45.8424 18.6854L33.8282 29.8741L33.62 30.068L33.6804 30.346L37.277 46.9199L23.7722 38.1574Z"
                        stroke="var(--primary-color)"
                      />
                    </svg> /* emptyFavIcon */
                  )}
                </div>
              </div>
              {commentaires ? null : (
                <div className="commentsandlikesBig">
                  {" "}
                  <div
                    className="comments"
                    onClick={showCommentaires}
                    role="button"
                    onKeyDown={showCommentaires}
                    tabIndex={0}
                  >
                    <svg
                      width="30"
                      height="15"
                      viewBox="0 0 71 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.85 59C23.9085 59 23.0055 58.6892 22.3398 58.136C21.674 57.5827 21.3 56.8324 21.3 56.05V47.2H7.1C5.21696 47.2 3.41105 46.5784 2.07954 45.4719C0.748033 44.3655 0 42.8648 0 41.3V5.9C0 2.6255 3.195 0 7.1 0H63.9C65.783 0 67.5889 0.621605 68.9205 1.72807C70.252 2.83453 71 4.33522 71 5.9V41.3C71 42.8648 70.252 44.3655 68.9205 45.4719C67.5889 46.5784 65.783 47.2 63.9 47.2H42.245L29.11 58.1445C28.4 58.705 27.5125 59 26.625 59H24.85ZM10.65 8.85V14.75H60.35V8.85H10.65ZM10.65 20.65V26.55H39.05V20.65H10.65ZM10.65 32.45V38.35H46.15V32.45H10.65Z"
                        fill="var(--primary-color)"
                      />
                    </svg>{" "}
                    {tabCommentaires.length}{" "}
                  </div>
                  <div
                    className="iconefav"
                    onClick={addLikesIdea}
                    role="button"
                    onKeyDown={addLikesIdea}
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
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
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

                    {likesIdea}
                  </div>
                  <div
                    className="closeIdea"
                    onClick={handleClosed}
                    role="button"
                    onKeyDown={handleClosed}
                    tabIndex={0}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292894 10.2929C-0.0976309 10.6834 -0.0976309 11.3166 0.292894 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893Z"
                        fill="var(--tertiary-color)"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="theme">Thème : {theme}</div>
            <div className="service">Service : {userByIdea.nomservice}</div>
            <div className="published">Publiée le : {published}</div>
            <div className="published">
              Publiée par : {userByIdea.prenom} {userByIdea.nom}
            </div>
            <div
              /* onChange={() => setIdeaModified(true)} */ className="textIdea"
            >
              {description}
            </div>

            <div className="imageIdea">
              <img src={imagebg} alt="" />
            </div>

            <div
              className={
                commentaires ? "bottomIdeaCommentsOpened" : "bottomIdea"
              }
            >
              <div className="resources">
                Ressources : <br />1 : <br />2 : <br />3 :
              </div>

              {ideamodified ? (
                <div className="modifiedIdeaBig">Modifiée le {modified}</div>
              ) : null}
            </div>
          </div>
          {commentaires ? (
            <div className="rightContent">
              <div className="commentsandlikesBigOpened">
                {" "}
                <div
                  className="comments"
                  onClick={showCommentaires}
                  role="button"
                  onKeyDown={showCommentaires}
                  tabIndex={0}
                >
                  <svg
                    width="30"
                    height="15"
                    viewBox="0 0 71 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.85 59C23.9085 59 23.0055 58.6892 22.3398 58.136C21.674 57.5827 21.3 56.8324 21.3 56.05V47.2H7.1C5.21696 47.2 3.41105 46.5784 2.07954 45.4719C0.748033 44.3655 0 42.8648 0 41.3V5.9C0 2.6255 3.195 0 7.1 0H63.9C65.783 0 67.5889 0.621605 68.9205 1.72807C70.252 2.83453 71 4.33522 71 5.9V41.3C71 42.8648 70.252 44.3655 68.9205 45.4719C67.5889 46.5784 65.783 47.2 63.9 47.2H42.245L29.11 58.1445C28.4 58.705 27.5125 59 26.625 59H24.85ZM10.65 8.85V14.75H60.35V8.85H10.65ZM10.65 20.65V26.55H39.05V20.65H10.65ZM10.65 32.45V38.35H46.15V32.45H10.65Z"
                      fill="var(--primary-color)"
                    />
                  </svg>{" "}
                  {tabCommentaires.length}{" "}
                </div>
                <div
                  className="iconefav"
                  onClick={addLikesIdea}
                  role="button"
                  onKeyDown={addLikesIdea}
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
                  {likesIdea}
                </div>
                <div
                  className="closeIdea"
                  onClick={handleClosed}
                  role="button"
                  onKeyDown={handleClosed}
                  tabIndex={0}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292894 10.2929C-0.0976309 10.6834 -0.0976309 11.3166 0.292894 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893Z"
                      fill="var(--tertiary-color)"
                    />
                  </svg>
                </div>
              </div>
              <CommentairesListe
                showCommentaires={showCommentaires}
                id={id}
                tabCommentaires={tabCommentaires}
                getComments={getComments}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
Idee.propTypes = {
  id: PropTypes.number.isRequired,
  titre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  selected: PropTypes.number,
  setSelected: PropTypes.func.isRequired,
};

Idee.defaultProps = {
  selected: null,
};

export default Idee;
