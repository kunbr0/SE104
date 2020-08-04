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
    dbConnection.query(storage.Query_ListStudentsInClass(), [urlData.class_name, urlData.yearid], (err, data, fields) => 
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

function addStudent(dbConnection, req, res, urlData)
{
    console.log(urlData[0]);

    urlData.forEach(request => {
        dbConnection.query(storage.Query_AssignStudentClass(), [request.class, request.student_id], (err, data, fields) =>
        {
            if (err) throw err;
            res.status(statusCodes.OK).json(data);
        });
    });
}

function getAcademicYears(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_GetYears(), (err, data, fields) => 
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
    GetAllClasses: getAllClasses,
    AddStudent: addStudent,
    GetAcademicYears: getAcademicYears
}