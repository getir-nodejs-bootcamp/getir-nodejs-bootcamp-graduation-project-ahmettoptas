const express = require("express");
const router = express.Router();
const error = require("../middlewares/invalidEndpoint");


router.route("/").get(error).post(error).put(error).delete(error);

module.exports = router;