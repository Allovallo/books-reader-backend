const mongoose = require("mongoose");

const app = require("./app");
// const port = process.env.PORT || 5000;

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Successfully connected!");
    console.log(`Example app listening on port ${PORT}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
