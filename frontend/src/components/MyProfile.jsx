import "../assets/styles/profileCss.css";
import PropTypes from "prop-types";
import cake from "../assets/cake.svg";
import idee from "../assets/idée.svg";

function MyProfile({
  prenom,
  username,
  dateembauche,
  serviceName,
  anniversaire,
  email,
  image,
  avatar,
  previewImage,
  dataIdea,
  setBioText,
  changeBiography,
  canWrite,
  setCanWrite,
}) {
  return (
    <>
      <div className="all">
        <div className="scrollBar">
          <div className="infosContainer">
            <div className="imgA">
              <img
                className="avatar"
                src={
                  avatar
                    ? `${import.meta.env.VITE_BACKEND_URL}/${avatar}`
                    : image
                }
                width="195"
                height="195"
                alt="avatar"
              />
              <input
                type="file"
                className="inputAvatar"
                name="avatar"
                onChange={previewImage}
              />
            </div>

            <div className="firstidea">
              <div className="white"> {prenom} </div>
              <div className="white"> {username} </div>
              <div className="row">
                <div className="sdm">
                  <div className="white"> {serviceName} </div>
                  <div className="white"> {dateembauche.substr(0, 10)} </div>
                  <div className="white"> {email} </div>
                </div>
                <div className="birthidea">
                  <div className="white">
                    <img src={cake} alt="cake" /> {anniversaire.substr(0, 10)}
                  </div>
                  <div className="white">
                    <img src={idee} alt="ampoule" /> {dataIdea?.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="biography">
            Biographie
            <textarea
              name="bio"
              className="textareaProfile"
              id="bio"
              cols="30"
              rows="5"
              disabled={canWrite}
              placeholder=""
              onChange={(e) => setBioText(e.target.value)}
            />
            <div
              role="button"
              onKeyDown={() => setCanWrite(!canWrite)}
              className="crayon"
              onClick={() => setCanWrite(!canWrite)}
              tabIndex={0}
            >
              <svg
                width="30"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7563 3.36828C15.0812 3.04333 15.0812 2.50174 14.7563 2.19345L12.8066 0.243716C12.4983 -0.0812387 11.9567 -0.0812387 11.6317 0.243716L10.0986 1.7685L13.2232 4.89307M0 11.8754V15H3.12457L12.34 5.77628L9.21539 2.65171L0 11.8754Z"
                  fill="var(--primary-color)"
                />
              </svg>
            </div>
          </div>
          <button
            className="validation"
            type="button"
            onClick={() => changeBiography()}
          >
            Valider
          </button>

          <div className="newIdee">
            Mes idées postées :
            {dataIdea?.map((el) => (
              <div className="ideeProfile" key={el.titre}>
                <p> {el.titre}</p> <p>le {el.date} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="archives">

      </div> */}
    </>
  );
}

MyProfile.propTypes = {
  prenom: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  dateembauche: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  anniversaire: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  previewImage: PropTypes.func.isRequired,
  dataIdea: PropTypes.node.isRequired,
  setBioText: PropTypes.func.isRequired,
  changeBiography: PropTypes.func.isRequired,
  canWrite: PropTypes.func.isRequired,
  setCanWrite: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default MyProfile;
