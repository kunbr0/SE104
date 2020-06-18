let storage = require('./../../storage/storage');
let statusCodes = require('./../status-codes')

function insertStudent(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_InsertStudent(
        urlData.id, urlData.name, urlData.gender, urlData.dob, urlData.addr, urlData.mail, urlData.classid
    ), (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    });
}

function updateStudent(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_UpdateStudent(
        urlData.id, urlData.name, urlData.gender, urlData.dob, urlData.addr, urlData.mail, urlData.classid
    ), (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    });
}

module.exports = 
{
    InsertStudent: insertStudent,
    UpdateStudent: updateStudent
};