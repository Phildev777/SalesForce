import React, { useState } from "react";
import "../assets/styles/IdeeContainer.css";
import AddIdea from "./AddIdea";

import SearchIdeaBar from "./SearchIdeaBar";
import IdeeListe from "./IdeeListe";

function IdeeContainer() {
  const [searchValue, setSearchValue] = useState("");
  const [formAddIdea, setFormAddIdea] = useState(false);

  const openFormAddIdea = () => {
    setFormAddIdea(!formAddIdea);
  };

  return (
    <div className="mainContainer">
      <div className="ideasContainer">
        <div className="titleIdeas">Idées</div>
        <div className="selectionAndDisplay">
          <SearchIdeaBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            formAddIdea={formAddIdea}
            setFormAddIdea={setFormAddIdea}
            openFormAddIdea={openFormAddIdea}
          />{" "}
          {formAddIdea ? (
            <AddIdea openFormAddIdea={openFormAddIdea} />
          ) : (
            <IdeeListe
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default IdeeContainer;
