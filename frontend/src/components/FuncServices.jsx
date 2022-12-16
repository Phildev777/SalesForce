import React from "react";

function FuncServices(nom, effectifs, localisation) {
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

export default FuncServices;
