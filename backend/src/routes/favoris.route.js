const router = require("express").Router();
const favorisController = require("../controllers/favoris.controller");

// create
router.post("/", favorisController.createFav);

// read
router.get("/", favorisController.getAllFav);

router.get("/:id", favorisController.getFavById);

// //delete
router.delete("/", favorisController.deleteFav);

module.exports = router;
