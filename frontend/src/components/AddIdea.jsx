import React, { useState } from "react";

function AddIdea() {
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
  const [description, setDescription] = useState("");

  return (
    <div className="mainIdeaContainer">
      <input
        className="titleIdea"
        value={title}
        type="text"
        placeholder="Titre"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <form className="themeSelection">
        <label htmlFor="theme-select">
          <select id="theme-select">
            <option value="">---</option>
            {themes.map((theme) => (
              <option key={theme.id}>{theme.nom}</option>
            ))}
          </select>
        </label>
      </form>{" "}
      <input
        className="descriptionIdea"
        value={description}
        type="text"
        placeholder="Décrivez votre idée"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="addFile">File</div>
      <button type="button">Add a file</button>
      <div className="addLink">Link</div>
      <button type="button">Add a link</button>
    </div>
  );
}

export default AddIdea;
