import React, { useState } from "react";
import PropTypes from "prop-types";
import CommentairesListe from "./CommentairesListe";

import "../assets/styles/Idee.css";
import imagebg from "../assets/backgroundIdee.png";
import emptyFavIcon from "../assets/emptyFavIcon.svg";
import commentIcon from "../assets/commentIcon.svg";
import likeIcon from "../assets/likeIcon.svg";
import avatar from "../assets/avatar1.svg";
import crossIcon from "../assets/crossIcon.svg";

// import test from "../assets/test.svg";

function Idee({
  id,
  title,
  nom,
  modified,
  comments,
  published,
  theme,
  service,
  selected,
  setSelected,
}) {
  const handleOpen = (e) => {
    e.stopPropagation();
    setSelected(id);
  };

  const [commentaires, setCommentaires] = useState(false);

  const showCommentaires = () => {
    setCommentaires(!commentaires);
  };

  const handleClosed = (e) => {
    e.stopPropagation();
    setSelected(null);
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
          <div className="avatar1">
            {" "}
            <img src={avatar} alt="avatar" />
          </div>
          <div className="titleIdeaSmall">
            {title} <img src={emptyFavIcon} alt="emptyfavicon" />
          </div>
          <div className="published">Publiée le : {published}</div>

          <div className="modifiedIdeaSmall">Modifiée le {modified}</div>
          <div className="commentsandlikesSmall">
            <img
              src={commentIcon}
              alt="commenticon"
              fill="green"
              className="commentIcon"
            />{" "}
            {comments} <img src={likeIcon} alt="likesicon" /> {likesIdea}
          </div>
        </div>
      ) : (
        <div className="ideaContainerBig">
          <div className="leftContent">
            <div className="titleContainerBig">
              <div className="avatar1">
                {" "}
                <img src={avatar} alt="avatar" />
              </div>
              <div className="titleIdeaBig">
                {title} <img src={emptyFavIcon} alt="emptyfavicon" />
              </div>
              <div className="commentsandlikesBig">
                {" "}
                <div
                  onClick={showCommentaires}
                  role="button"
                  onKeyDown={showCommentaires}
                  tabIndex={0}
                >
                  <img src={commentIcon} alt="commenticon" />
                  {comments}{" "}
                </div>
                <div
                  className="iconefav"
                  onClick={addLikesIdea}
                  role="button"
                  onKeyDown={addLikesIdea}
                  tabIndex={0}
                >
                  <img src={likeIcon} alt="likeicon" /> {likesIdea}
                </div>
                <div
                  className="closeIdea"
                  onClick={handleClosed}
                  role="button"
                  onKeyDown={handleClosed}
                  tabIndex={0}
                >
                  <img src={crossIcon} alt="cross" />
                </div>
              </div>
            </div>
            <div className="theme">Thème : {theme}</div>
            <div className="service">Service : {service}</div>
            <div className="published">Publiée le : {published}</div>
            <div className="published">Publiée par : {nom}</div>

            <div className="textIdea">
              Lorem ipsum dolor sit amet. Non nulla mollitia sed atque tenetur
              et sint quam aut cumque perferendis quo quae veritatis ut maxime
              optio in mollitia autem. Et necessitatibus suscipit eos
              voluptatibus consequatur quo veniam quod quo nobis voluptatem. Non
              tenetur pariatur et magni veniam Lorem ipsum dolor sit amet. Non
              nulla mollitia sed atque tenetur et sint quam aut cumque
              perferendis quo quae veritatis ut maxime optio in mollitia autem.
              Et necessitatibus suscipit eos voluptatibus consequatur quo veniam
              quod quo nobis voluptatem. Non tenetur pariatur et magni veniam
            </div>

            <div className="imageIdea">
              <img src={imagebg} alt="" />
            </div>

            <div className="bottomIdea">
              <div className="resources">
                Ressources : <br />1 : <br />2 : <br />3 :
              </div>
              <div className="modifiedIdeaBig">Modifiée le {modified}</div>
            </div>
          </div>
          {commentaires ? (
            <div className="rightContent">
              <CommentairesListe />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
Idee.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  published: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  selected: PropTypes.number,
  setSelected: PropTypes.func.isRequired,
};

Idee.defaultProps = {
  selected: null,
};

export default Idee;
