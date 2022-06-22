console.log("hi");

const path = require("path");

const express = require("express");

const viewRoutes = require("./routes/view");

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static())
app.use (viewRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);