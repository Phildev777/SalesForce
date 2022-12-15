import React, { useState } from "react";
import "../assets/styles/IdeeContainer.css";
import Idee from "./Idee";
import SearchIdeaBar from "./SearchIdeaBar";
/* import add from "../assets/addIcon.svg"; */

function IdeeContainer() {
  const detailidee = [
    {
      id: 1,
      title: "Pause dej",
      modified: "02/03/2022",
      comments: 30,
      likes: 45,
      published: "30/01/2022",
    },

    {
      id: 2,
      title: "Comptabilité",
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "25/02/2022",
    },

    {
      id: 3,
      title: "Vacances",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
    },
  ];

  /*              <div className="addIdea">
                <img src={add} alt="add" />
                Ajouter une idée
              </div> */

  const [selected, setSelected] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="mainContainer">
      <div className="ideasContainer">
        <div className="titleIdeas">Idées</div>
        <div className="selectionAndDisplay">
          <SearchIdeaBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />{" "}
          {detailidee.map((i) => (
            <Idee
              title={i.title}
              modified={i.modified}
              comments={i.comments}
              likes={i.likes}
              published={i.published}
              selected={selected}
              setSelected={setSelected}
              id={i.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IdeeContainer;
