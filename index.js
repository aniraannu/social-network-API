//Import express
const express = require('express');
//Import connection
const db = require('./config/connection');

//Import routes
const routes = require('./routes');

const cwd = process.cwd();
//Define the port number
const PORT = process.env.PORT || 3001;
//Initialize express
const app = express();

//Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
? cwd.split('01-Activities')[1]
: cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//Listening to the port
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});