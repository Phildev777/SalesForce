import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "../assets/styles/SearchIdeaBar.css";
import add from "../assets/addIcon.svg";

function SearchIdeaBar({
  searchValue,
  setSearchValue,
  openFormAddIdea,
  selectedService,
  handleSelectedService,
}) {
  const [services, setServices] = useState([]);

  const getServices = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/service/`)
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="ideaSelection">
      <div className="ideaAndSearch">
        {" "}
        <input
          className="searchIdeaInput"
          value={searchValue}
          type="text"
          placeholder="Rechercher une idée"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div
          className="addIdea"
          onClick={openFormAddIdea}
          role="button"
          onKeyDown={openFormAddIdea}
          tabIndex={0}
        >
          <img src={add} alt="add" />
          Ajouter une idée
        </div>
      </div>
      <form className="serviceSelection">
        <label htmlFor="service-select">
          <select
            id="service-select"
            value={selectedService}
            onChange={(e) => handleSelectedService(e.target.value)}
          >
            <option value="">Idées par service</option>
            {services.map((service) => (
              <option key={service.idservice}>{service.nom}</option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
}

SearchIdeaBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  openFormAddIdea: PropTypes.func.isRequired,
  handleSelectedService: PropTypes.func.isRequired,
  selectedService: PropTypes.string.isRequired,
};

export default SearchIdeaBar;
