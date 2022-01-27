const finalAggregate = (req,res)=>{
    if (req.records.length === 0) {
        res.status(404).json({
          code: 4,
          msg: "Unsuccess: No results were found for the given JSON.",
          records: [],
        });
        return;
      }
      res.status(200).json({ code: 0, msg: "Success", records: req.records});
}

module.exports = finalAggregate;