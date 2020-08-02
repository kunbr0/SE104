let storage = require('./../../storage/storage');
let statusCodes = require('./../status-codes');

function insertClass(dbConnection, req, res, urlData)
{
    // dbConnection.query(storage.Query_InsertClass(
    //     urlData.id, urlData.name, urlData.grade, urlData.year
    // ), (err, data, fields) => 
    // {
    //     if (err) throw err;
    //     res.status(statusCodes.OK).json(data);
    // });
}

function getClassStudent(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_ListStudentsInClass(), [req.params.id], (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    }); 
}

function getNumberOfStudentsInClass(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_GetNumberOfStudentsInClass(), [req.params.id], (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    }); 
}

function getAllClasses(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_ListAllClasses(), (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    }); 
}

module.exports = 
{
    InsertClass: insertClass,
    GetClassStudent: getClassStudent,
    GetNumberOfStudentsInClass: getNumberOfStudentsInClass,
    GetAllClasses: getAllClasses
}