/**
 * 
 * @param {Joi Object} model joi object model
 * @returns {Failed response and message, Validate data}  
 
 * It validates data. If that function finds error in request data,
  It doesn't query the db. Else, it continues.  
*/

const validate = (model) => (req, res, next) => {
  const { error } = model.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      code: 3,
      msg:
        "Unsuccess: Please fill all json fields properly, " +
        error.details.map((element) => element.message),
      records: [],
    });
  }
  next();
};

module.exports = validate;
