const crypto = require("crypto");

const randomImageName = (bytes = 32) => {
  return crypto.randomBytes(bytes).toString("hex");
};

module.exports = randomImageName;
