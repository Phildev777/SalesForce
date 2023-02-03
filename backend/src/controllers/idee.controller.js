const ideeModel = require("../models/idee.model");

const date = new Date().toLocaleDateString("fr");

// create
const createIdea = (req, res) => {
  const {
    theme,
    titre,
    description,
    utilisateurIdutilisateur,
    serviceIdservice,
  } = req.body;

  ideeModel
    .create(
      date, // generate date, format YYYY/MM/DD
      theme,
      titre,
      description,
      false, // archive
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
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUserByIdea = (req, res) => {
  ideeModel
    .userByIdea(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const findAllIdeasOfAnUser = (req, res) => {
  ideeModel
    .findAllIdeasOfAnUser(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateIdea = async (req, res) => {
  try {
    const { theme, titre, description, archive, id } = req.body;
    const [result] = await ideeModel.updateIdea(
      theme,
      titre,
      description,
      archive,
      id
    );
    if (result.affectedRows > 0) {
      return res.status(201).send(result);
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

const deleteIdea = async (req, res) => {
  try {
    const [result] = await ideeModel.deleteIdea(req.params.id);
    if (result.affectedRows > 0) {
      return res.status(200).send("Idée supprimée");
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

module.exports = {
  getAllIdeas,
  createIdea,
  getIdeaById,
  getUserByIdea,
  updateIdea,
  deleteIdea,
  findAllIdeasOfAnUser,
};
