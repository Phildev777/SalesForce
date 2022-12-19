import React from "react";

import FuncServices from "@components/FuncServices";
import "../assets/styles/services.css";

function SectionServices() {
  const services = [
    {
      nom: "Recherche et Développement",
      effectifs: "15",
      localisation: "quatrième sous-sol",
    },

    {
      nom: "Comptabilité",
      effectifs: "10",
      localisation: "troisième sous-sol",
    },

    {
      nom: "Secretariat",
      effectifs: "6",
      localisation: "troisième étage",
    },

    {
      nom: "Commercial",
      effectifs: "8",
      localisation: "premier étage",
    },

    {
      nom: "Encadrement",
      effectifs: "6",
      localisation: "dernier étage",
    },

    {
      nom: "Marketing",
      effectifs: "8",
      localisation: "deuxième étage",
    },

    {
      nom: "Entretien",
      effectifs: "12",
      localisation: "deuxième sous-sol",
    },

    {
      nom: "Relation Clientèle",
      effectifs: "4",
      localisation: "rez-de-chaussée",
    },

    {
      nom: "Expédition",
      effectifs: "6",
      localisation: "entrepôt",
    },

    {
      nom: "Réception",
      effectifs: "2",
      localisation: "entrepôt",
    },

    {
      nom: "Relations humaines",
      effectifs: "4",
      localisation: "troisième étage",
    },

    {
      nom: "Logistique",
      effectifs: "4",
      localisation: "premier sous-sol",
    },
  ];

  return (
    <div>
      <div>
        <ul className="Global">
          {services.map((service) => {
            return (
              <FuncServices
                nom={service.nom}
                effectifs={service.effectifs}
                localisation={service.localisation}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SectionServices;
