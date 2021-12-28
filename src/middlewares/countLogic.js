/**
 * It gets records with given date range and process records for the count field
 * 
 * @param {request object} req 
 * @param {response object} res 
 * @returns {response payload} 
 */

const logic = (req, res, next) => {
  const records = req.records;
  const { minCount, maxCount } = req.body;
  const recordLength = records.length;
  const validRecords = [];
  for (let index = 0; index <= recordLength - 1; index++) {
    const sum = records[index].counts.reduce((a, b) => a + b, 0);
    if (sum >= minCount && sum <= maxCount) {
      var payloadRecord = records[index].toJSON();
      payloadRecord.totalCounts = sum;
      delete payloadRecord.counts;
      validRecords.push(payloadRecord);
    }
  }
  if (validRecords.length === 0) {
    res.status(404).json({
      code: 4,
      msg: "Unsuccess: No results were found for the given JSON.",
      records: [],
    });
    return;
  }
  res.status(200).json({ code: 0, msg: "Success", records: validRecords});
};

module.exports = logic;
