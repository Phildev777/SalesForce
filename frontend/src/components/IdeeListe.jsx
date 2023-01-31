import React, { useState, useEffect } from "react";
import "../assets/styles/ideeListe.css";
import PropTypes from "prop-types";
import axios from "axios";
import Idee from "./Idee";

function IdeeListe({ searchValue, selectedService }) {
  const [detailidee, setDetailIdee] = useState([]);

  const getIdeas = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/idee/`)
      .then((res) => {
        setDetailIdee(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getIdeas();
  }, []);

  const [selected, setSelected] = useState(null);

  const handleDateDecroissante = () => {
    const tmp = [...detailidee];

    const sortedArray = tmp.sort((a, b) => {
      const tmpA = a.date.split("/");
      const tmpB = b.date.split("/");

      const dateA = tmpA[2] + tmpA[1] + tmpA[0];
      const dateB = tmpB[2] + tmpB[1] + tmpB[0];

      return Number(dateB) - Number(dateA);
    });
    setDetailIdee(sortedArray);
    setSelected(null);
  };

  const handleDateCroissante = () => {
    const tmp = [...detailidee];

    const sortedArray = tmp.sort((a, b) => {
      const tmpA = a.date.split("/");
      const tmpB = b.date.split("/");

      const dateA = tmpA[2] + tmpA[1] + tmpA[0];
      const dateB = tmpB[2] + tmpB[1] + tmpB[0];

      return Number(dateA) - Number(dateB);
    });
    setDetailIdee(sortedArray);
    setSelected(null);
  };

  return (
    <div className="ideeListe">
      <div className="triDate">
        Tri par date:{" "}
        <button onClick={handleDateCroissante} type="button">
          Ancienne
        </button>
        <button onClick={handleDateDecroissante} type="button">
          Récente
        </button>
      </div>
      <div className="liste">
        {detailidee === 0 ? (
          <div className="noIdea">Aucune idée partagée pour le moment</div>
        ) : (
          detailidee
            .filter((i) =>
              i.titre.toLowerCase().includes(searchValue.toLowerCase())
            )
            .filter((i) => {
              return selectedService
                ? i.service_idservice === Number(selectedService)
                : true;
            })
            .map((i) => (
              <Idee
                key={i.ididee}
                titre={i.titre}
                nom={i.utilisateur_idutilisateur}
                description={i.description}
                modified={i.modified}
                likes={i.likes}
                published={i.date}
                selected={selected}
                setSelected={(e) => {
                  setSelected(e);
                }}
                id={i.ididee}
                theme={i.theme}
                service={i.service_idservice}
                ressources={i.ressources}
                archive={i.archive}
              />
            ))
        )}
      </div>
    </div>
  );
}

IdeeListe.propTypes = {
  searchValue: PropTypes.string.isRequired,
  selectedService: PropTypes.string.isRequired,
};

export default IdeeListe;
