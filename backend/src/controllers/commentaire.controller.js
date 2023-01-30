const commentaireModel = require("../models/commentaire.model");

const date = new Date().toLocaleDateString("fr");

// create
const createComment = (req, res) => {
  const { detail, utilisateurIdutilisateur, ideeIdidee } = req.body;

  commentaireModel
    .create(detail, date, utilisateurIdutilisateur, ideeIdidee)
    .then(([result]) => {
      res.status(200).send([result]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the idea");
    });
};

// read
const getAllComments = (req, res) => {
  commentaireModel
    .findAll()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getCommentById = (req, res) => {
  commentaireModel
    .findById(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUserBycomment = (req, res) => {
  commentaireModel
    .findUserByComment(req.params.id)
    .then(([[result]]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

// const updateIdea = async (req, res) => {
//   try {
//       const {theme, titre, description, archive, id} = req.body;
//       const [result] = await ideeModel.updateIdea(theme, titre, description, archive, id);
//       if (result.affectedRows > 0) {
//           return res.status(201).send(result)
//       }
//       else {
//            res.status(400).send("erreur")
//       }
//   } catch (err) {
//       console.error(err)
//       return res.status(500).send("problem")
//   }
// }

const deleteComment = async (req, res) => {
  try {
    const [result] = await commentaireModel.deleteComment(req.params.id);
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
  getAllComments,
  createComment,
  getCommentById,
  getUserBycomment,
  //   updateIdea,
  deleteComment,
};
