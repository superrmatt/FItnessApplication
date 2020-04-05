const express = require("express"),
 logger = require("morgan"),
 mongoose = require("mongoose"),
 routes = require("./routes/routes"),
 password = require("./seeders/password");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT} !`)
});

