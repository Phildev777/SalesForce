import React, { useState } from "react";
import "../assets/styles/MainContainer.css";
/* import AddIdea from "./AddIdea"; */
import SearchIdeaBar from "./SearchIdeaBar";
import IdeeListe from "./IdeeListe";

function IdeeContainer() {
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
          <IdeeListe
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default IdeeContainer;
