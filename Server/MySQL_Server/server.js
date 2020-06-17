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
    connection.query(storage.Query_InsertStudent('18521234', 'Nguyen Van E', 'Nam', '2000-11-11',
    'TPHCM', 'nlebachnlb@gmail.com', 'PMCL'), 
    (err, data, fields) => 
    {
        if (!err) 
        {
            console.log(data);
            res.status(200).json(data);
        }
        else 
        {
            console.log("Query failed!" + err);
        }
    });
    // res.send("HEllo");
});

app.listen(port);