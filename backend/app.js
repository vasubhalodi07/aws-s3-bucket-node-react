const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const imageRoutes = require("./routes/image.route");
app.use("/api", imageRoutes);

const sequlize = require("./config/dbconn.config");
sequlize
  .sync()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
    process.exit(1);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
