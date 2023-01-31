import React from "react";
import "../assets/styles/IdeeContainer.css";
import PropsTypes from "prop-types";
import SectionServices from "./SectionServices";

function MainContainer({ dataService }) {
  return (
    <div className="mainContainer">
      <div className="ideasContainer">
        <div className="titleIdeas">Services</div>
        <div className="selectionAndDisplay">
          {/* <SearchIdeaBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />{" "} */}
          {/*    <IdeeListe
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />{" "} */}
          <SectionServices dataService={dataService} />
        </div>
      </div>
    </div>
  );
}
MainContainer.propTypes = {
  dataService: PropsTypes.arrayOf().isRequired,
};

export default MainContainer;
