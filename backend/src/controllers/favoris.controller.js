const favorisModel = require("../models/favoris.model");

// create
const createFav = (req, res) => {
  const { utilisateurIdutilisateur, ideeIdidee } = req.body;
  favorisModel
    .create(utilisateurIdutilisateur, ideeIdidee)
    .then(([result]) => {
      res.status(200).send([result]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the favorite");
    });
};

// read
const getAllFav = (req, res) => {
  favorisModel
    .findAll()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getFavById = (req, res) => {
  favorisModel
    .findByIdUser(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteFav = async (req, res) => {
  const { utilisateurIdutilisateur, ideeIdidee } = req.query;
  try {
    const [result] = await favorisModel.deleteFav(
      ideeIdidee,
      utilisateurIdutilisateur
    );
    if (result.affectedRows > 0) {
      return res.status(200).send(result);
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

module.exports = {
  getAllFav,
  createFav,
  getFavById,
  //   updateIdea,
  deleteFav,
};
