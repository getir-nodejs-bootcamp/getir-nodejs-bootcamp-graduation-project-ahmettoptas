const validateRecord = require("./src/validation/Record");

test("validate properly given json data", () => {
  const data = {
    startDate: "2017-01-28",
    endDate: "2017-02-28",
    minCount: 1000,
    maxCount: 3000,
  };
  console.log(validateRecord.validate(data));
  expect(validateRecord.validate(data)?.value).toBeDefined();
});

test("validate wrong given json data (enddate is less than start date)", () => {
  const data = {
    startDate: "2017-01-28",
    endDate: "2016-02-28",
    minCount: 1000,
    maxCount: 3000,
  };
  console.log(validateRecord.validate(data));
  expect(validateRecord.validate(data)?.error).toBeDefined();
});

test("validate wrong given json data (maxCount is less than minCount)", () => {
  const data = {
    startDate: "2017-01-28",
    endDate: "2018-02-28",
    minCount: 4000,
    maxCount: 3000,
  };
  console.log(validateRecord.validate(data));
  expect(validateRecord.validate(data)?.error).toBeDefined();
});

test("validate wrong given json data (missing field)", () => {
  const data = {
    endDate: "2018-02-28",
    minCount: 4000,
    maxCount: 3000,
  };
  console.log(validateRecord.validate(data));
  expect(validateRecord.validate(data)?.error).toBeDefined();
});

