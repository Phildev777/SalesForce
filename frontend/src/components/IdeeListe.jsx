import React, { useState } from "react";
import PropTypes from "prop-types";
import Idee from "./Idee";

function IdeeListe({ searchValue }) {
  const [detailidee /* SetDetailIdee */] = useState([
    {
      id: 1,
      title: "Pause dej",
      modified: "02/03/2022",
      comments: 30,
      likes: 45,
      published: "30/01/2022",
      theme: "example",
    },

    {
      id: 2,
      title: "Comptabilité",
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "25/02/2022",
      theme: "example",
    },

    {
      id: 3,
      title: "Vacances",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
    },
    {
      id: 4,
      title: "Pause dej",
      modified: "02/03/2022",
      comments: 30,
      likes: 45,
      published: "30/01/2022",
      theme: "example",
    },

    {
      id: 5,
      title: "Comptabilité",
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "25/02/2022",
      theme: "example",
    },

    {
      id: 6,
      title: "Vacances",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
    },
    {
      id: 7,
      title: "Pause dej",
      modified: "02/03/2022",
      comments: 30,
      likes: 45,
      published: "30/01/2022",
      theme: "example",
    },

    {
      id: 8,
      title: "Comptabilité",
      modified: "03/04/2022",
      comments: 50,
      likes: 15,
      published: "25/02/2022",
      theme: "example",
    },

    {
      id: 9,
      title: "Vacances",
      modified: "20/03/2022",
      comments: 25,
      likes: 72,
      published: "05/01/2022",
      theme: "example",
    },
  ]);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {detailidee
        .filter((i) =>
          i.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((i) => (
          <Idee
            title={i.title}
            modified={i.modified}
            comments={i.comments}
            likes={i.likes}
            published={i.published}
            selected={selected}
            setSelected={setSelected}
            id={i.id}
            theme={i.theme}
          />
        ))}
    </div>
  );
}
IdeeListe.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default IdeeListe;
