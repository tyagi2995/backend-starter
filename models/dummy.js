"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dummy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  dummy.init(
    {
      first_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      status: {
        type: DataTypes.INTEGER,
      },
    },

    {
      sequelize,
      modelName: "dummy",
      tableName: "dummies",
      paranoid: true,
      timestamps: true,
    },
  );
  return dummy;
};
