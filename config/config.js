//connect to mongoDB
//require mongoose
const { connect, connection } = require('mongoose');
//connection string
const connectionString = 'mongodb://127.0.0.1:27017/socialNetworkDB';
//Make the connection
connect(connectionString);
//export connection
module.exports = connection;