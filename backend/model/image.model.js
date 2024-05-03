const { DataTypes } = require("sequelize");
const sequlize = require("../config/dbconn.config");

const ImageModel = sequlize.define("images", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ImageModel;
