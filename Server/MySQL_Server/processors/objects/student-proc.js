let storage = require('./../../storage/storage');
let statusCodes = require('./../status-codes')

function insertStudent(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_InsertStudent(
        urlData.id, urlData.name, urlData.gender, urlData.dob, urlData.addr, urlData.mail
    ), (err, data, fields) => 
    {
        if (err) { res.send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function updateStudent(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_UpdateStudent(
        urlData.id, urlData.name, urlData.gender, urlData.dob, urlData.addr, urlData.mail
    ), (err, data, fields) => 
    {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function getStudentDetail(dbConnection, req, res, urlData)
{
    console.log(req.params);
    dbConnection.query(storage.Query_GetStudent(req.params.id), (err, data, fields) => 
    {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function removeStudent(dbConnection, req, res, urlData)
{
    console.log(req.params);
    dbConnection.query(storage.Query_RemoveStudent(req.params.id), (err, data, fields) => 
    {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function getStudentListWithAvg(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_GetAvgScore(), [urlData.sem_name, urlData.yearid], (err, data, fields) => 
    {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

module.exports = 
{
    InsertStudent: insertStudent,
    UpdateStudent: updateStudent,
    GetStudentDetail: getStudentDetail,
    RemoveStudent: removeStudent,
    GetStudentListWithAvg: getStudentListWithAvg
};