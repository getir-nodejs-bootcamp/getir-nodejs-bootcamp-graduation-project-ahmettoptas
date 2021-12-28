const Record = require("../models/Record");

/** records from database with given date ranges
 * 
 * @param {date} startDate  
 * @param {date} endDate 
 * @returns {database docs} 
 */

const findByFields = async (startDate,endDate) => {

    var records =  Record.find({
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
      },{key : 1, createdAt : 1,  counts : 1, _id: 0}).exec();
      return records;
}

module.exports = findByFields;