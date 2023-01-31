const router = require("express").Router();
const serviceController = require("../controllers/service.controller");

router.get("/", serviceController.getAll);
router.get("/:id", serviceController.getById);
router.post("/", serviceController.createService);
router.put("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

module.exports = router;
