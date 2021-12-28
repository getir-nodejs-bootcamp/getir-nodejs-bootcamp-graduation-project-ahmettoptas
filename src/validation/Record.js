const Joi = require("joi");

/**
 * Joi module makes easy to handle JSON data which is requested to error handling.
 * It checks data types and make them required data for the endpoint. it also controls the relationship
 *  between fields, For example, the start time cannot be greater than the end time. 
 *  */

const validateReq = Joi.object({
  startDate: Joi.date().max(Joi.ref('endDate')).required(),
  endDate: Joi.date().required(),
  minCount: Joi.number().less(Joi.ref('maxCount')).required(),
  maxCount: Joi.number().required(),
});

module.exports = validateReq;