const { Router } = require("express");
const router = Router();

const { filter } = require("../controller/filter.controller");

router.post("/filter", filter);

module.exports = router;