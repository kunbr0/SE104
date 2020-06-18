let express     = require('express');
let config      = require('./config');
let mysql       = require('mysql');

// Query processors
let processor   = require('./processors/queries-processor');

const parser    = require('body-parser');

// Apps
let api_v1      = express();
let studentApp  = express();
let teacherApp  = express();
let app         = express();

// Database connection
let connection  = mysql.createConnection(config);
const port      = 8080;

app.use('/v1', api_v1);
api_v1.use(parser.json());

api_v1.use('/student', studentApp); 
studentApp.use(parser.json());

api_v1.use('/teacher', teacherApp); 
teacherApp.use(parser.json());

// Connect to database
connection.connect((err) => 
{
    if (err) 
        console.log("Error connecting database...\n\n" + err);
    else 
        console.log("Database is connected!\n\n");
});

// Listen for queries and process
processor.ProcessQuery(api_v1, connection);
processor.ProcessStudentQueries(studentApp, connection);
processor.ProcessTeacherQueries(teacherApp, connection);

app.listen(port);