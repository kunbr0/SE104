let path        = require('path');
let express     = require('express');
let config      = require('./config');
let mysql       = require('mysql');
let passwd      = require('./utils/passwd');

// Query processors
let processor   = require('./processors/queries-processor');
let clientProcessor   = require('./processors/client-processor');

const parser    = require('body-parser');

// Apps
let api_v1      = express();
let studentApp  = express();
let teacherApp  = express();
let authApp     = express();
let app         = express();

// Database connection
let connection  = mysql.createConnection(config);
const port      = 8080;

// serve the static files from the react app
app.use(express.static(path.join(__dirname, 'client')));

app.use('/v1', api_v1);
api_v1.use(parser.json());

api_v1.use('/student', studentApp); 
studentApp.use(parser.json());

api_v1.use('/teacher', teacherApp); 
teacherApp.use(parser.json());

api_v1.use('/auth', authApp); 
authApp.use(parser.json());

// Connect to database
connection.connect((err) => 
{
    passwd.Encrypt('11112000Bach', (result) => {console.log('Encryption successful with ' + result); });
    if (err) 
        console.log("Error connecting database...\n\n" + err);
    else 
        console.log("Database is connected!\n\n");
    // passwd.Decrypt('cfce68cccd8699f69de82cb0b9fa34d0', (result) => console.log('Decryption successful with ' + result));
});

// Listen for queries and process
clientProcessor.ProcessClient(app);

processor.ProcessQuery(api_v1, connection);
processor.ProcessStudentQueries(studentApp, connection);
processor.ProcessTeacherQueries(teacherApp, connection);
processor.ProcessAuthenticationQueries(authApp, connection);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});