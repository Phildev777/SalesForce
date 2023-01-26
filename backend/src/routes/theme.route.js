const router = require("express").Router();
const themeController = require("../controllers/theme.controller");

// create
router.post("/create", themeController.createTheme);

// read
router.get("/", themeController.getAll);

router.get("/:id", themeController.getById);

// //update
router.put("/:id", themeController.updateTheme);

// //delete
router.delete("/:id", themeController.deleteTheme);

module.exports = router;
