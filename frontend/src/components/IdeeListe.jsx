import React, { useState } from "react";
import "../assets/styles/ideeListe.css";
import PropTypes from "prop-types";
import Idee from "./Idee";

function IdeeListe({ searchValue, selectedService }) {
  const [detailidee /* SetDetailIdee */] = useState([
    {
      id: 1,
      title: "Pause dej",
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
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
      service: "Comptabilité",
    },
    {
      id: 4,
      title: "Pause dej",
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
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "25/02/2022",
      theme: "example",
      service: "Comptabilité",
    },

    {
      id: 6,
      title: "Salle de repos",
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
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
      service: "Comptabilité",
    },
  ]);
  const [selected, setSelected] = useState(null);

  return (
    <div className="ideeListe">
      {detailidee
        .filter((i) =>
          i.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((i) => (selectedService ? i.service === selectedService : true))
        .map((i) => (
          <Idee
            key={i.id}
            title={i.title}
            modified={i.modified}
            comments={i.comments}
            likes={i.likes}
            published={i.published}
            selected={selected}
            setSelected={setSelected}
            id={i.id}
            theme={i.theme}
            service={i.service}
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
