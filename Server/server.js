const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./Config.env" });

const DB = process.env.DB;
const app = require("./app");

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected successfully"));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
