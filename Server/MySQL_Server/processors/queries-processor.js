let mysql           = require('mysql');
let storage         = require('./../storage/storage');
let statusCodes     = require('./status-codes');
let url             = require('url');
let express         = require('express');

let syntaxes        = require('./query-syntaxes');
let methods         = require('./../utils/http-methods');

let studentProc     = require('./objects/student-proc');
let teacherProc     = require('./objects/teacher-proc');

function processListStudentsInClass(dbConnection, req, res, urlData)
{
    if (urlData.classid === undefined) return null;

    dbConnection.query(storage.Query_ListStudentsInClass(urlData.classid), (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    });
}

function processNumberOfStudentsInClass(dbConnection, req, res, urlData)
{
    if (urlData.classid === undefined) return null;

    dbConnection.query(storage.Query_GetNumberOfStudentsInClass(urlData.classid), (err, data, fields) => 
    {
        if (err)
        {
            res.status(statusCodes.NotFound);
        }
        res.status(statusCodes.OK).json(data);
    });
}

function processQuery(app, dbConnection)
{
    methods.AppGet(app, syntaxes.listStudentsInClass, processListStudentsInClass, dbConnection);
    methods.AppGet(app, syntaxes.numberOfStudentsInClass, processNumberOfStudentsInClass, dbConnection);

}

function processStudentQueries(app, dbConnection)
{
    methods.AppPost(app, syntaxes.insertStudent, studentProc.InsertStudent, dbConnection);
}

function processTeacherQueries(app, dbConnection)
{
    methods.AppPost(app, syntaxes.insertTeacher, teacherProc.InsertTeacher, dbConnection);
}

module.exports = 
{
    ProcessQuery: processQuery,
    ProcessStudentQueries: processStudentQueries,
    ProcessTeacherQueries: processTeacherQueries
}