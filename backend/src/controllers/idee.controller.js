const ideeModel = require("../models/idee.model");

// create
const createIdea = (req, res) => {
  const {
    date,
    theme,
    titre,
    description,
    ressource,
    archive,
    utilisateurIdutilisateur,
    serviceIdservice,
  } = req.body;

  ideeModel
    .create(
      date,
      theme,
      titre,
      description,
      ressource,
      archive,
      utilisateurIdutilisateur,
      serviceIdservice
    )
    .then(([result]) => {
      res.status(200).send([result]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the idea");
    });
};

// read
const getAllIdeas = (req, res) => {
  ideeModel
    .findAll()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getIdeaById = (req, res) => {
  ideeModel
    .findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

// //update
// const update = (req, res) => {
//   /*modelUpdate*/
//   res.status(201).send(/*INFOS*/);
// }

// //delete
// const remove= (req, res) => {
//   /*modelDelete*/
//   res.status(201).send("Created")
// }

module.exports = {
  getAllIdeas,
  createIdea,
  getIdeaById,
  // read: read,
  // remove: remove
};
