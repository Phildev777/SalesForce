const router = require("express").Router();
const commentaireController = require("../controllers/commentaire.controller");

// create
router.post("/create", commentaireController.createComment);

// read
router.get("/", commentaireController.getAllComments);

router.get("/:id", commentaireController.getCommentById);

// //update
// router.put("/:id", commentaireController.updateComment);

// //delete
router.delete("/:id", commentaireController.deleteComment);

module.exports = router;
