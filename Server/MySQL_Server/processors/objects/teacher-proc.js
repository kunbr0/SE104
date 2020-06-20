let storage = require('./../../storage/storage');
let statusCodes = require('./../status-codes');

function insertTeacher(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_InsertTeacher(
        urlData.id, urlData.passwd, urlData.username, urlData.fullname, 
        urlData.gender, urlData.dob, urlData.addr, urlData.mail
    ), (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    });
}

// function getIDFromUsername(dbConnection, username)
// {
//     dbConnection.query()
// }

module.exports = 
{
    InsertTeacher: insertTeacher
}