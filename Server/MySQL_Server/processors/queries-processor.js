let mysql = require('mysql');
let storage = require('./../storage/storage');
let statusCodes= require('./status-codes');
let url = require('url');
let express = require('express');
let syntaxes = require('./query-syntaxes');

function appGet(app, syntax, callback, dbConnection)
{
    app.get(syntax, (req, res) => 
    {
        let urlData = url.parse(req.url, true).query;
        console.log(urlData);
        callback(dbConnection, req, res, urlData);
    });   
}

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

function processInsertStudent(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_InsertStudent(
        urlData.id, urlData.name, urlData.gender, urlData.dob, urlData.addr, urlData.mail, urlData.classid
    ), (err, data, fields) => 
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    });
}

function processInsertTeacher(dbConnection, req, res, urlData)
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

function processQuery(app, dbConnection)
{
    appGet(app, syntaxes.listStudentsInClass, processListStudentsInClass, dbConnection);
    appGet(app, syntaxes.numberOfStudentsInClass, processNumberOfStudentsInClass, dbConnection);
    appGet(app, syntaxes.insertStudent, processInsertStudent, dbConnection);
    appGet(app, syntaxes.insertTeacher, processInsertTeacher, dbConnection);
}

module.exports = 
{
    ProcessQuery: processQuery
}