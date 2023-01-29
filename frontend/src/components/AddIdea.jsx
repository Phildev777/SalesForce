// import React, { useState, useRef } from "react";
// import PropTypes from "prop-types";
// import "../assets/styles/AddIdea.css";
// import axios from "axios";

// function AddIdea({ openFormAddIdea }) {
//   const themes = [
//     {
//       id: 1,
//       nom: "Travail",
//     },
//     {
//       id: 2,
//       nom: "Loisirs",
//     },
//     {
//       id: 3,
//       nom: "Cohésion d'équipe",
//     },
//   ];

//   const [title, setTitle] = useState("");
//   const [theme, setTheme] = useState("");
//   const [description, setDescription] = useState("");
//   const [lien, setLien] = useState("");

//   const MAX_LENGTH_DESCRIPTION = 500;
//   const handleChangeDescription = (event) => {
//     if (event.target.value.length <= MAX_LENGTH_DESCRIPTION) {
//       setDescription(event.target.value);
//     }
//   };

//   const numRemainingDescription = MAX_LENGTH_DESCRIPTION - description.length;

//   const MAX_LENGTH_TITLE = 50;
//   const handleChangeTitle = (event) => {
//     if (event.target.value.length <= MAX_LENGTH_TITLE) {
//       setTitle(event.target.value);
//     }
//   };

//   const numRemainingTitle = MAX_LENGTH_TITLE - title.length;

//   const inputRef = useRef();

//   const hSubmit = (evt) => {
//     evt.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("theme", theme);
//     formData.append("description", description);
//     formData.append("lien", lien);

//     for (let i = 0; i < inputRef.current.files.length; i += 1) {
//       formData.append("ressource", inputRef.current.files[i]);
//     }
//     axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/ressource/`, formData);
//   };

//   return (
//     <div className="mainIdeaContainer">
//       <div className="details">
//         <div className="titleIdea">
//           <input
//             className="titleIdeaInput"
//             value={title}
//             type="text"
//             placeholder="Donnez un titre à votre idée"
//             onChange={handleChangeTitle}
//           />{" "}
//           <small className="remaining-characters">
//             Il vous reste {numRemainingTitle} caractères
//           </small>
//         </div>
//         <form className="themeSelectionForm">
//           <label htmlFor="theme-select">
//             <select
//               onChange={(e) => setTheme(e.target.value)}
//               id="theme-select"
//             >
//               <option value="">Choisir un thème</option>
//               {themes.map((themeChoisi) => (
//                 <option
//                   onChange={(e) => setTheme(e.target.value)}
//                   key={themeChoisi.id}
//                 >
//                   {themeChoisi.nom}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </form>{" "}
//         <div className="descriptionIdea">
//           <textarea
//             className="descriptionIdeaInput"
//             value={description}
//             type="text"
//             placeholder="Décrivez votre idée"
//             onChange={handleChangeDescription}
//           />
//           <small className="remaining-characters">
//             Il vous reste {numRemainingDescription} caractères
//           </small>
//         </div>
//       </div>
//       <div className="fileAndLink">
//         <div className="file">
//           <div className="addFile">
//             {" "}
//             <form className="formLink">
//               <input
//                 className="inputFile"
//                 type="file"
//                 name="ajoutFichier"
//                 ref={inputRef}
//                 multiple
//               />
//               <input
//                 type="text"
//                 className="inputLink"
//                 placeholder="Ajouter un lien"
//                 name="lien"
//                 onChange={(e) => setLien(e.target.value)}
//               />
//             </form>{" "}
//           </div>
//         </div>
//       </div>
//       <div className="submission">
//         <button className="annuler" type="button" onClick={openFormAddIdea}>
//           Annuler
//         </button>
//         <button onClick={hSubmit} className="valider" type="submit">
//           Valider
//         </button>
//       </div>
//     </div>
//   );
// }
// AddIdea.propTypes = {
//   openFormAddIdea: PropTypes.func.isRequired,
// };

// export default AddIdea;

/// ////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../assets/styles/AddIdea.css";
import axios from "axios";
import UserContext from "../contexts/UserContext";

function AddIdea({ openFormAddIdea }) {
  const { user } = useContext(UserContext);
  // const themes = [
  //   {
  //     id: 1,
  //     nom: "Travail",
  //   },
  //   {
  //     id: 2,
  //     nom: "Loisirs",
  //   },
  //   {
  //     id: 3,
  //     nom: "Cohésion d'équipe",
  //   },
  // ];
  const [themes, setThemes] = useState([]);

  const getThemes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/theme/`)
      .then((res) => {
        setThemes(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getThemes();
  }, []);

  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [description, setDescription] = useState("");
  const [/* lien, */ setLien] = useState("");

  const MAX_LENGTH_DESCRIPTION = 500;
  const handleChangeDescription = (event) => {
    if (event.target.value.length <= MAX_LENGTH_DESCRIPTION) {
      setDescription(event.target.value);
    }
  };

  const numRemainingDescription = MAX_LENGTH_DESCRIPTION - description.length;

  const MAX_LENGTH_TITLE = 50;
  const handleChangeTitle = (event) => {
    if (event.target.value.length <= MAX_LENGTH_TITLE) {
      setTitle(event.target.value);
    }
  };

  const numRemainingTitle = MAX_LENGTH_TITLE - title.length;

  const inputRef = useRef();

  let pasdetitre;
  if (!title) {
    pasdetitre = (
      <div className="pasdetitre">Merci de donner un titre à votre idée</div>
    );
  }

  let pasdetheme;
  if (!theme) {
    pasdetheme = (
      <div className="pasdetheme">Merci d'indiquer le thème de votre idée</div>
    );
  }

  let pasdedescription;
  if (!description) {
    pasdedescription = (
      <div className="pasdedescription">Merci de détailler votre idée</div>
    );
  }

  const [showMessage, setShowMessage] = useState(false);

  const hSubmit = (evt) => {
    evt.preventDefault();
    /* if (!title) {
      console.log("Veuillez sélectionner un thème");
    } else if (!theme) {
      console.log("Veuillez sélectionner un thème");
    } else if (!description) {
      console.log("Veuillez décrire votre idée");
    } else */ {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/idee/create`, {
        theme,
        titre: title,
        description,
        utilisateurIdutilisateur: user.id,
        serviceIdservice: user.serviceIdservice,
      });

      const formData = new FormData();
      for (let i = 0; i < inputRef.current.files.length; i += 1) {
        formData.append("ressource", inputRef.current.files[i]);
      }
      axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/ressource/`,
        formData
      );
    }
    setTitle("");
    setTheme(theme[0]);
    setDescription("");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="mainIdeaContainer">
      <div className="details">
        <div className="titleIdea">
          <input
            className="titleIdeaInput"
            value={title}
            type="text"
            placeholder="Donnez un titre à votre idée"
            onChange={handleChangeTitle}
          />{" "}
          <small className="remaining-characters">
            Il vous reste {numRemainingTitle} caractères
          </small>
          {pasdetitre}
        </div>
        <form className="themeSelectionForm">
          <label htmlFor="theme-select">
            <select
              onChange={(e) => setTheme(e.target.value)}
              id="theme-select"
            >
              <option value="">Choisir un thème</option>
              {themes.map((themeChoisi) => (
                <option
                  key={themeChoisi.idtheme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  {themeChoisi.nom}
                </option>
              ))}
            </select>
            {pasdetheme}
          </label>
        </form>{" "}
        <div className="descriptionIdea">
          <textarea
            className="descriptionIdeaInput"
            value={description}
            type="text"
            placeholder="Décrivez votre idée"
            onChange={handleChangeDescription}
          />
          {showMessage ? (
            <div className="ideaSent">Merci d'avoir transmis votre idée</div>
          ) : null}
          <small className="remaining-characters">
            Il vous reste {numRemainingDescription} caractères
          </small>
          {pasdedescription}
        </div>
      </div>
      <div className="fileAndLink">
        <div className="file">
          <div className="addFile">
            {" "}
            <form className="formLink">
              <input
                className="inputFile"
                type="file"
                name="ajoutFichier"
                ref={inputRef}
                multiple
              />
              <input
                type="text"
                className="inputLink"
                placeholder="Ajouter un lien"
                name="lien"
                onChange={(e) => setLien(e.target.value)}
              />
            </form>{" "}
          </div>
        </div>
      </div>
      <div className="submission">
        <button className="annuler" type="button" onClick={openFormAddIdea}>
          Annuler
        </button>
        <button onClick={hSubmit} className="valider" type="submit">
          Valider
        </button>
        <button className="retour" type="button" onClick={openFormAddIdea}>
          Retour
        </button>
      </div>
    </div>
  );
}
AddIdea.propTypes = {
  openFormAddIdea: PropTypes.func.isRequired,
};

export default AddIdea;
