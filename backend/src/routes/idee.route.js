const router = require("express").Router();
const ideeController = require("../controllers/idee.controller");

// create
router.post("/create", ideeController.createIdea);

// read
router.get("/", ideeController.getAllIdeas);

router.get("/:id", ideeController.getIdeaById);

router.get("/userbyidea/:id", ideeController.getUserByIdea);

// //update
router.put("/:id", ideeController.updateIdea);

// //delete
router.delete("/:id", ideeController.deleteIdea);

module.exports = router;
