let express = require('express');
let storage = require('./storage/storage')
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'bach',
    password: 'Bach01248',
    database: 'STUDENTMANAGEMENT',
    insecureAuth: true
});
const port = 3000;

let app = express();

// Connect to database
connection.connect((err) => {
    if (err) {
        console.log("Error connecting database...\n\n" + err);
    }
    else {
        console.log("Database is connected!\n\n");
        
    }
});

app.get('/', (req, res) => {
    // res.send(`${storage.Query_ListSubjects()} | ${storage.Query_ListClasses()}`);
    connection.query(storage.Query_ListSubjects(), (err, data, fields) => {
        if (!err) {
            console.log(data);
            res.status(200).json(data);
        }
    });
});

app.listen(port);