//Import express
const express = require('express');
//Import database connection from the config file
const db = require('./config/connection');
//Import routes
const routes = require('./routes');

//Define the port number
const PORT = process.env.PORT || 3001;
//Initialize express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//Listening to the port
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
});