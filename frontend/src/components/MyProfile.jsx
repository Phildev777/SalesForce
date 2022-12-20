// import React, { useState, useRef } from "react";
import "../assets/styles/profileCss.css";
// import cake from "../assets/cake.svg";
// import idée from "../assets/idée.svg";
import avatar from "../assets/avatar.svg";

function MyProfile() {
  // state (état,données)

  const tab = [
    {
      prenom: "adam",
      nom: "gg",
      service: "rh",
      date_embauche: "20/10/2022",
      mail: "dfzefzef@mlff.fr",
    },
  ];

  //   const uploadedImage = useRef(null);
  //   const imageUploader = useRef(null);

  // comportements

  //   const handleImageUpload = (e) => {
  //     const [file] = e.target.files;
  //     if (file) {
  //       const reader = new FileReader();
  //       const { current } = uploadedImage;
  //       current.file = file;
  //       reader.onload = (e) => {
  //         current.src = e.target.result;
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  /// affichage (render)
  return (
    <div className="all">
      <div className="infosContainer">
        <div className="img">
          <img className="avatar" src={avatar} alt="avatar" />
          {/* <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                ref={imageUploader}
                                style={{
                                    display: "none"
                                }}
                            />
                            <div
                                style={{
                                    height: "200px",
                                    width: "200px",
                                    border: "1px dashed black"
                                }}
                                onClick={() => imageUploader.current.click()}
                            >
                                <img
                                    ref={uploadedImage}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        position: "acsolute"
                                    }}
                                />
                            </div>
                            Click to upload Image
                        </div> */}
        </div>
        <div className="firstidea">
          <div className="firstname"> {tab[0].prenom} </div>
          <div className="name"> {tab[0].nom} </div>
          <div className="row">
            <div className="sdm">
              <div className="service"> {tab[0].service} </div>
              <div className="hireDate"> {tab[0].date_embauche} </div>
              <div className="mail"> {tab[0].mail} </div>
            </div>
            <div className="birtidea">
              <div className="birthday">
                Date de naissance (si il en a envie){" "}
              </div>
              Idées photo
            </div>
          </div>
        </div>
      </div>
      <div className="biography"> Biographie </div>
    </div>
  );
}

export default MyProfile;
