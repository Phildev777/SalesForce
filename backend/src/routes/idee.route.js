const router = require("express").Router();
const ideeController = require("../controllers/idee.controller");

// create
router.post("/create", ideeController.createIdea);

// read
router.get("/", ideeController.getAllIdeas);

router.get("/:id", ideeController.getIdeaById);

// //update
// router.put("/:id", /UpdateHandler/);

// //delete
// router.delete("/:id", /DeleteHandler/);

module.exports = router;
