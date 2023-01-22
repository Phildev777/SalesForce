import React, { useState } from "react";
import "../assets/styles/ideeListe.css";
import PropTypes from "prop-types";
import Idee from "./Idee";

function IdeeListe({ searchValue, selectedService }) {
  const [detailidee, setDetailIdee] = useState([
    {
      id: 1,
      title: "Pause dej",
      employee: "Tanguay Gaspard",
      modified: "02/03/2022",
      comments: 30,
      likes: 45,
      published: "30/01/2022",
      theme: "example",
      service: "Marketing",
    },

    {
      id: 2,
      title: "Fournitures",
      employee: "Ploure Alexandre",
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "25/02/2022",
      theme: "example",
      service: "Ressources humaines",
    },

    {
      id: 3,
      title: "Vacances",
      employee: "Harcourt Etienne",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "08/01/2022",
      theme: "example",
      service: "Comptabilité",
    },
    {
      id: 4,
      title: "Pause dej",
      employee: "Begin Mallory",
      modified: "02/03/2022",
      comments: 30,
      likes: 45,
      published: "30/01/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 5,
      title: "Bowling",
      employee: "Auclair Charles",
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "16/02/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 6,
      title: "Salle de repos",
      employee: "Boulanger Faustine",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
      service: "Comptabilité",
    },
    {
      id: 7,
      title: "Pause dej",
      employee: "Lajoie Russell",
      modified: "02/03/2022",
      comments: 30,
      likes: 45,
      published: "30/01/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 8,
      title: "Machine à café",
      employee: "Alphonse Martin",
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "25/02/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 9,
      title: "Vacances",
      employee: "Lajoie Russell",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 10,
      title: "Vacances",
      employee: "User 1",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 11,
      title: "Vacances",
      employee: "Lévesque Philippe",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 12,
      title: "Vacances",
      employee: "Harcourt Etienne",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
      service: "Comptabilité",
    },
    {
      id: 13,
      title: "Travail",
      employee: "Harcourt Etienne",
      modified: "20/11/2022",
      comments: 25,
      likes: 72,
      published: "09/09/2022",
      theme: "example",
      service: "Comptabilité",
    },
    {
      id: 14,
      title: "Réunion",
      employee: "Harcourt Fabien",
      modified: "21/06/2022",
      comments: 25,
      likes: 72,
      published: "15/09/2022",
      theme: "example",
      service: "Comptabilité",
    },
    {
      id: 15,
      title: "Vacances",
      employee: "Harcourt Etienne",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "08/03/2022",
      theme: "example",
      service: "Comptabilité",
    },
  ]);
  const [selected, setSelected] = useState(null);

  const handleDateDecroissante = () => {
    const tmp = [...detailidee];

    const sortedArray = tmp.sort((a, b) => {
      const tmpA = a.published.split("/");
      const tmpB = b.published.split("/");

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
      const tmpA = a.published.split("/");
      const tmpB = b.published.split("/");

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
        <button onClick={handleDateDecroissante} type="button">
          Ancienne
        </button>
        <button onClick={handleDateCroissante} type="button">
          Récente
        </button>
      </div>

      {detailidee
        .filter((i) =>
          i.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((i) => (selectedService ? i.service === selectedService : true))
        .map((i) => (
          <Idee
            key={i.id}
            title={i.title}
            nom={i.employee}
            modified={i.modified}
            comments={i.comments}
            likes={i.likes}
            published={i.published}
            selected={selected}
            setSelected={(e) => {
              setSelected(e);
            }}
            id={i.id}
            theme={i.theme}
            service={i.service}
            handleDateDecroissante={handleDateDecroissante}
          />
        ))}
    </div>
  );
}
IdeeListe.propTypes = {
  searchValue: PropTypes.string.isRequired,
  selectedService: PropTypes.string.isRequired,
};

export default IdeeListe;
