/*
    Error message for invalid endpoint othen than /records.
*/


const invalidEndpoint = (req, res, next) => {
  res.status(404).json({ code: 2, msg: "Unsuccess: Invalid Endpoint", records: [] });
};

module.exports = invalidEndpoint;
