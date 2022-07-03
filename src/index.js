console.log('hi');

//requiring express library
const path = require('path');

const express = require('express');

const routes = require('./routes/');

const PORT = process.env.PORT || 4000;

//by calling express function this creates an application to set up entire server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static())
app.use('/', routes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
