/*
    Error message for invalid request type for the /records endpoint.
*/

const invalidRequest = (req, res, next) => {
  res.status(405).json({ code: 1, msg: "Unsuccess: Invalid Request Type", records: [] });
};

module.exports = invalidRequest;
