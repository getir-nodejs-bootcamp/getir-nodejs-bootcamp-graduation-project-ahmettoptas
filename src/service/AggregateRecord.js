const Record = require("../models/Record");

/** records from database with given date ranges and counts 
 *
 * @param {date} startDate
 * @param {date} endDate
 * @param {number} minCount
 * @param {number} maxCount
 * @returns {database docs}
 */

const findByFields = async (startDate, endDate, minCount, maxCount) => {
  var records =  Record.aggregate([
    {
      $match: {
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
      },
    },
    {
      $addFields: {
        totalCounts: { $sum: "$counts" },
      },
    },
    {
      $match: {
        totalCounts: { $gte: minCount, $lte: maxCount },
      },
    },
    {
      $unset: ["counts", "_id", "value"],
    },
  ]).exec();
  return records;
};

module.exports = findByFields;
