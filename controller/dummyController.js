const db = require("../models");
const CatchAsync = require("../utils/catchAsync");

exports.dummy = CatchAsync(async (req, res) => {
  const dummy = await db.dummies.findAll({
    attributes: ["id", "name", "status"],
    order: [["id", "DESC"]],
  });

  return res.status(200).json({
    success: true,
    message: "Dummy API working successfully",
    total: dummy.length,
    data: dummy,
  });
});
