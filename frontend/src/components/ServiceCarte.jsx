import React from "react";
import PropsTypes from "prop-types";

function ServiceCarte({ nom, effectifs, localisation }) {
  return (
    <div className="Services">
      <div className="NomsServices">
        <h2>{nom}</h2>
      </div>
      <div className="Caract">
        <p>Effectifs : {effectifs}</p>

        <p>Localisation: {localisation}</p>
      </div>
    </div>
  );
}
ServiceCarte.propTypes = {
  nom: PropsTypes.string.isRequired,
  effectifs: PropsTypes.string.isRequired,
  localisation: PropsTypes.string.isRequired,
};
export default ServiceCarte;
