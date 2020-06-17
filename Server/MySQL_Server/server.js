let express     = require('express');
let storage     = require('./storage/storage');
let config      = require('./config');
let mysql       = require('mysql');
let app         = express();
let connection  = mysql.createConnection(config);
const port      = 8080;

// Connect to database
connection.connect((err) => 
{
    if (err) 
    {
        console.log("Error connecting database...\n\n" + err);
    }
    else 
    {
        console.log("Database is connected!\n\n");
    }
});

app.get('/', (req, res) => 
{
    connection.query(storage.Query_InsertTeacher('ID223', '11112000', 'bac', 'Nguyen Van B', 'Nam',
    '1991-3-2', 'TPHCM', 'b@gm.uit.edu.vn'), 
    (err, data, fields) => 
    {
        if (!err) 
        {
            console.log(data);
            res.status(200).json(data);
        }
        else 
        {
            console.log("Query failed!");
        }
    });
    // res.send("HEllo");
});

app.listen(port);