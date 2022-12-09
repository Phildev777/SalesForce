import React, { useState } from "react";
import "../assets/styles/Idee.css";
import imagebg from "../assets/backgroundIdee.png";

function Idee() {
  const [isClicked, setIsClicked] = useState(true);
  const handleClick = () => {
    setIsClicked(false);
  };

  return (
    <div
      className="ideaContainer"
      onClick={handleClick}
      role="button"
      onKeyDown={handleClick}
      tabIndex={0}
    >
      {isClicked ? (
        <div className="titleContainer">
          <div className="title">Titre de l'idée</div>
          <div className="modifiedIdea">Modifiée le 01/01/2022</div>
          <div className="comments&likes">
            <svg
              width="30"
              height="15"
              viewBox="0 0 71 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.85 59C23.9085 59 23.0055 58.6892 22.3398 58.136C21.674 57.5827 21.3 56.8324 21.3 56.05V47.2H7.1C5.21696 47.2 3.41105 46.5784 2.07954 45.4719C0.748033 44.3655 0 42.8648 0 41.3V5.9C0 2.6255 3.195 0 7.1 0H63.9C65.783 0 67.5889 0.621605 68.9205 1.72807C70.252 2.83453 71 4.33522 71 5.9V41.3C71 42.8648 70.252 44.3655 68.9205 45.4719C67.5889 46.5784 65.783 47.2 63.9 47.2H42.245L29.11 58.1445C28.4 58.705 27.5125 59 26.625 59H24.85ZM10.65 8.85V14.75H60.35V8.85H10.65ZM10.65 20.65V26.55H39.05V20.65H10.65ZM10.65 32.45V38.35H46.15V32.45H10.65Z"
                fill="black"
              />
            </svg>{" "}
            15
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
                  fill="black"
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
            32
          </div>
        </div>
      ) : (
        <div>
          <div className="titleContainer">
            <div className="title">Titre de l'idée</div>
            <div className="comments&likes">
              {" "}
              <svg
                width="30"
                height="15"
                viewBox="0 0 71 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.85 59C23.9085 59 23.0055 58.6892 22.3398 58.136C21.674 57.5827 21.3 56.8324 21.3 56.05V47.2H7.1C5.21696 47.2 3.41105 46.5784 2.07954 45.4719C0.748033 44.3655 0 42.8648 0 41.3V5.9C0 2.6255 3.195 0 7.1 0H63.9C65.783 0 67.5889 0.621605 68.9205 1.72807C70.252 2.83453 71 4.33522 71 5.9V41.3C71 42.8648 70.252 44.3655 68.9205 45.4719C67.5889 46.5784 65.783 47.2 63.9 47.2H42.245L29.11 58.1445C28.4 58.705 27.5125 59 26.625 59H24.85ZM10.65 8.85V14.75H60.35V8.85H10.65ZM10.65 20.65V26.55H39.05V20.65H10.65ZM10.65 32.45V38.35H46.15V32.45H10.65Z"
                  fill="black"
                />
              </svg>{" "}
              15
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
                    fill="black"
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
              32
            </div>
          </div>
          <div className="published">Publiée par :</div>
          <div className="textIdea">
            Lorem ipsum dolor sit amet. Non nulla mollitia sed atque tenetur et
            sint quam aut cumque perferendis quo quae veritatis ut maxime optio
            in mollitia autem. Et necessitatibus suscipit eos voluptatibus
            consequatur quo veniam quod quo nobis voluptatem. Non tenetur
            pariatur et magni veniam sit corporis dolor et ipsum vitae vel
            beatae optio? Aut architecto cupiditate sit enim beatae eos autem
            consequuntur ad dicta excepturi est quia porro qui quam itaque ab
            libero animi. Et molestiae quaerat et sequi vero ut magnam rerum non
            consequatur velit eum nesciunt iusto est fuga eaque est quia dolor.
          </div>
          <div className="imageIdea">
            <img src={imagebg} alt="" />
          </div>
          <div className="bottomIdea">
            <div className="resources">
              Ressources : <br />1 : <br />2 : <br />3 :
            </div>
            <div className="modifiedIdea">Modifiée le 01/01/2022</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Idee;
