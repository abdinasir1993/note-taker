console.log("hi");

const express = require("express");
const path = require("path");

const routes = require("./src/routes");

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);