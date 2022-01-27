const express = require("express");
const router = express.Router();
const JoiModel =  require("../validation/Record");
const validationMid = require("../middlewares/validate");
const recordController = require("../controller/Record");
const logic = require("../middlewares/countLogic");

const invalidRequest = require("../middlewares/invalidRequest"); 
const aggController = require("../controller/AggRecord");
const aggFinal = require("../middlewares/aggregateFinal");


router.route("/").post(validationMid(JoiModel),recordController,logic).get(invalidRequest).put(invalidRequest).delete(invalidRequest);
router.route("/agg").post(validationMid(JoiModel),aggController,aggFinal).get(invalidRequest).put(invalidRequest).delete(invalidRequest);

module.exports = router;