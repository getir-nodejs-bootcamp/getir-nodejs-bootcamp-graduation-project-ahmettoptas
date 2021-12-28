const findByFields = require("../service/Record");


const recordController = async (req, res, next) => {
  const { startDate, endDate } = req.body;
  const records = await findByFields(startDate, endDate);
  req.records = records;
  next();
};


module.exports = recordController;
