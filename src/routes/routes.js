const { Router } = require("express");
const router = Router();
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

const { filter } = require("../controller/filter.controller");
const { getToken } = require("../controller/token.controller");

router.post("/filter", auth, filter);
router.post("/token", getToken);

module.exports = router;