import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "../assets/styles/AddIdea.css";
import axios from "axios";

function AddIdea({ openFormAddIdea }) {
  const themes = [
    {
      id: 1,
      nom: "Travail",
    },
    {
      id: 2,
      nom: "Loisirs",
    },
    {
      id: 3,
      nom: "Cohésion d'équipe",
    },
  ];

  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [description, setDescription] = useState("");
  const [lien, setLien] = useState("");

  const inputRef = useRef();

  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("theme", theme);
    formData.append("description", description);
    formData.append("lien", lien);

    for (let i = 0; i < inputRef.current.files.length; i += 1) {
      formData.append("ressource", inputRef.current.files[i]);
    }
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/ressource/`, formData);
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
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
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
                  onChange={(e) => setTheme(e.target.value)}
                  key={themeChoisi.id}
                >
                  {themeChoisi.nom}
                </option>
              ))}
            </select>
          </label>
        </form>{" "}
        <div className="descriptionIdea">
          <textarea
            className="descriptionIdeaInput"
            value={description}
            type="text"
            placeholder="Décrivez votre idée"
            onChange={(e) => setDescription(e.target.value)}
          />
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
      </div>
    </div>
  );
}
AddIdea.propTypes = {
  openFormAddIdea: PropTypes.func.isRequired,
};

export default AddIdea;
