import React from "react";
import "../assets/styles/services.css";
import PropsTypes from "prop-types";
import ServiceCarte from "./ServiceCarte";

function SectionServices({ dataService }) {
  return (
    <ul className="Global">
      {dataService.map((service) => {
        return (
          <ServiceCarte
            key={service.id}
            nom={service.nom}
            effectifs={service.nbemploye}
            localisation={service.localisation}
          />
        );
      })}
    </ul>
  );
}
SectionServices.propTypes = {
  dataService: PropsTypes.arrayOf().isRequired,
};

export default SectionServices;
