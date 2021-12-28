const express = require("express");
const router = express.Router();
const JoiModel =  require("../validation/Record");
const validationMid = require("../middlewares/validate");
const recordController = require("../controller/Record");
const logic = require("../middlewares/countLogic");

const invalidRequest = require("../middlewares/invalidRequest"); 


router.route("/").post(validationMid(JoiModel),recordController,logic).get(invalidRequest).put(invalidRequest).delete(invalidRequest);
module.exports = router;