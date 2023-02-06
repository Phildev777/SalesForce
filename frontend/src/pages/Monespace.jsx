import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import MyProfile from "../components/MyProfile";
import UserContext from "../contexts/UserContext";
import "../assets/styles/MonEspace.css";

function Monespace() {
  const [canWrite, setCanWrite] = useState(true);
  const [bioText, setBioText] = useState();
  const [data, setData] = useState(null);
  const [dataIdea, setDataIdea] = useState();
  const userContext = useContext(UserContext);

  const getProfile = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/profile/${
          userContext.user.id
        }`
      )
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getIdeas = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/idee/findAllIdea/${
          userContext.user.id
        }`
      )
      .then((res) => {
        setDataIdea(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const changeBiography = () => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/utilisateur/profile/bio/${
          userContext.user.id
        }`,
        { biographie: bioText }
      )
      .then(() => {
        getProfile();
        setCanWrite(true);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if (userContext.user.id) {
      getProfile();
      getIdeas();
      // previewImage()
    }
  }, [userContext.user.id]);

  const previewImage = (event) => {
    const imageFiles = event.target.files;
    const imageFilesLength = imageFiles.length;

    if (imageFilesLength > 0) {
      const selectedFile = imageFiles[0];
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
              }/api/utilisateur/modifierAvatar/${userContext.user.id}`,
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
    <div className="containerFullPro">
      <div className="mainContentPro">
        {data && (
          <MyProfile
            // eslint-disable-next-line
            {...data}
            previewImage={previewImage}
            canWrite={canWrite}
            setCanWrite={setCanWrite}
            setBioText={setBioText}
            changeBiography={changeBiography}
            dataIdea={dataIdea}
            editable
          />
        )}
      </div>
    </div>
  );
}

export default Monespace;
