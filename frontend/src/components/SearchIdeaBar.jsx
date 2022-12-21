import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/SearchIdeaBar.css";
import add from "../assets/addIcon.svg";

function SearchIdeaBar({ searchValue, setSearchValue, openFormAddIdea }) {
  const [services /* setServices */] = React.useState([
    {
      id: 1,
      nom: "Comptabilité",
    },
    {
      id: 2,
      nom: "Ressources humaines",
    },
    {
      id: 3,
      nom: "Marketing",
    },
  ]);

  // const [messages, setMessages] = useState(['Hello There!']);
  // const [userInput, setuserInput] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setuserInput('');
  //   alert(
  //     'The state is going to be updated, the User interface will be updated'
  //   );
  //   setMessages([...messages, userInput]);
  // };

  return (
    <div className="ideaSelection">
      <div className="ideaAndSearch">
        {" "}
        <input
          className="searchIdeaInput"
          value={searchValue}
          type="text"
          placeholder="Recherche"
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
          <select id="service-select">
            <option value="">---</option>
            {services.map((service) => (
              <option key={service.id}>{service.nom}</option>
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
};

export default SearchIdeaBar;
