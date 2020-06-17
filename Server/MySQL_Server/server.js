let express     = require('express');
let config      = require('./config');
let mysql       = require('mysql');
let processor   = require('./processors/queries-processor');

let app         = express();
let connection  = mysql.createConnection(config);
const port      = 8080;

// Connect to database
connection.connect((err) => 
{
    if (err) 
        console.log("Error connecting database...\n\n" + err);
    else 
        console.log("Database is connected!\n\n");
});

// Listen for queries and process
processor.ProcessQuery(app, connection);

app.listen(port);