const findByFields = require("../service/AggregateRecord");


const aggController = async (req, res, next) => {
  const { startDate, endDate, minCount, maxCount } = req.body;
  const records = await findByFields(startDate, endDate, minCount, maxCount);
  req.records = records;
  next();
};

module.exports = aggController;
