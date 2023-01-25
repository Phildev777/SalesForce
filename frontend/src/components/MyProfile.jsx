import "../assets/styles/profileCss.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import cake from "../assets/cake.svg";
import idée from "../assets/idée.svg";
import avatar from "../assets/avatar.svg";

function MyProfile({ id }) {
  // const [biography, setBiography] = useState(false);

  const [image /* setImage */] = useState(avatar);
  const [data, setData] = useState();

  const getProfile = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/profile/${id}`)
      .then((res) => {
        console.warn("res", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const previewImage = (event) => {
    const imageFiles = event.target.files;
    const imageFilesLength = imageFiles.length;

    if (imageFilesLength > 0) {
      const selectedFile = imageFiles[0];
      // const imageSrc = URL.createObjectURL(selectedFile);
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      try {
        const response = axios({
          method: "post",
          url: `${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/avatar`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((result) => {
          console.warn("response", response);
          console.warn(" result.data ", result.data);
          axios
            .put(
              `${
                import.meta.env.VITE_BACKEND_URL
              }/api/utilisateur/modifierAvatar/${id}`,
              { url: result.data }
            )
            .then(() => {
              getProfile();
            });
        });
      } catch (error) {
        console.warn(error);
      }
    }
  };

  return (
    data && (
      <div className="all">
        <div className="infosContainer">
          <div className="img">
            <img
              className="avatar"
              src={
                data[0].avatar
                  ? `${import.meta.env.VITE_BACKEND_URL}/${data[0].avatar}`
                  : image
              }
              width="195"
              height="195"
              alt="avatar"
            />
            <label htmlFor="file-upload" className="custom-file-upload">
              <input
                type="file"
                className="inputAvatar"
                name="avatar"
                onChange={previewImage}
              />
              Modifiez votre avatar
            </label>
          </div>

          <div className="firstidea">
            <div className="white"> {data[0].prenom} </div>
            <div className="white"> {data[0].username} </div>
            <div className="row">
              <div className="sdm">
                <div className="white"> {data[0].serviceName} </div>
                <div className="white"> {data[0].dateembauche} </div>
                <div className="white"> {data[0].email} </div>
              </div>
              <div className="birthidea">
                <div className="white">
                  <img src={cake} alt="cake" /> {data[0].anniversaire}
                </div>
                <div className="white">
                  <img src={idée} alt="ampoule" /> Nombres d'idées
                </div>
              </div>
            </div>
          </div>
        </div>


        {data[0].biographie && (
          <div className="biography">
            {" "}
            <span className=" bio">Biographie</span>
            <p>{data[0].biographie}</p>
          </div>
        )}
        {/* <div className="newIdee">

        Ici il y aura les idees que l'utilisateur aura soumis classées par ordre chronologique.
      </div> */}
      </div>
    )
  );
}

MyProfile.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MyProfile;
