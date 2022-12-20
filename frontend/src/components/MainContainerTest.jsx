import React, { useState } from "react";
import "../assets/styles/MainContainerTest.css";
/* import AddIdea from "./AddIdea"; */
import SearchIdeaBar from "./SearchIdeaBar";
// import IdeeListe from "./IdeeListe";
import SectionServices from "./SectionServices";

function IdeeContainer() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="mainContainer">
      <div className="ideasContainer">
        <div className="titleIdeas">Services</div>
        <div className="selectionAndDisplay">
          <SearchIdeaBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />{" "}
          {/*    <IdeeListe
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />{" "} */}
          <SectionServices />
        </div>
      </div>
    </div>
  );
}

export default IdeeContainer;
