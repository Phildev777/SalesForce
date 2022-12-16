import React from "react";
import PropTypes from "prop-types";

function FuncServices({ nom, effectifs, localisation }) {
  return (
    <div>
      <div className="BarreRecherche" />

      <div className="Services">
        <div className="NomsServices">
          <h2>{nom}</h2>
        </div>
        <div className="Caract">
          <p>Effectifs : {effectifs}</p>
          <br />
          <p>Localisation: {localisation}</p>
        </div>
      </div>
    </div>
  );
}

FuncServices.propTypes = {
  nom: PropTypes.string.isRequired,
  effectifs: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
};

export default FuncServices;
