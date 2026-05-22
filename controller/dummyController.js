const db = require("../models");
const CatchAsync = require("../utils/catchAsync");

exports.dummy = CatchAsync(async (req, res) => {
  try {
    const dummy = await db.dummy.findAll({
      attributes: ["id", "first_name", "email", "status"],
      order: [["id", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      message: "Dummy API working successfully",
      total: dummy.length,
      data: dummy,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
      sqlMessage: error.parent?.sqlMessage,
    });
  }
});
