let storage = require('./../../storage/storage');
let statusCodes = require('./../status-codes');

// Student IDs cache
let sIDs = null;

function requestLastIdOfPrefix(dbConnection, prefix, callback) {
    let q = "SELECT count(id) as rawID FROM sm_student where id like ? order by id";
    dbConnection.query(q, [`${prefix}%`], (err, data, fields) => {
        console.log(data[0].rawID);
        let order = (data[0].rawID + 1).toString();
        while (order.length < 4) order = '0' + order;
        console.log(order);
        callback(`${prefix}${order}`);
    });
}

function insertStudent(dbConnection, req, res, urlData) {
    // console.log(new Date(Date.now()).getUTCFullYear());
    requestLastIdOfPrefix(dbConnection, new Date(Date.now()).getFullYear().toString(), (id) => 
    {
        dbConnection.query(storage.Query_InsertStudent(
            id, urlData.name, urlData.gender, urlData.dob, urlData.addr, urlData.mail
        ), (err, data, fields) => {
            if (err) { res.send(err); return; }
            res.status(statusCodes.OK).json({ new_id: id });
        });
    });
}

function updateStudent(dbConnection, req, res, urlData) {
    dbConnection.query(storage.Query_UpdateStudent(
        urlData.id, urlData.name, urlData.gender, urlData.dob, urlData.addr, urlData.mail
    ), (err, data, fields) => {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function getStudentDetail(dbConnection, req, res, urlData) {
    console.log(req.params);
    dbConnection.query(storage.Query_GetStudent(req.params.id), (err, data, fields) => {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function removeStudent(dbConnection, req, res, urlData) {
    console.log(req.params);
    dbConnection.query(storage.Query_RemoveStudent(req.params.id), (err, data, fields) => {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function getStudentListWithAvg(dbConnection, req, res, urlData) {
    dbConnection.query(storage.Query_GetAvgScore(), [urlData.sem_name, urlData.yearid], (err, data, fields) => {
        if (err) { res.status(statusCodes.NotFound).send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

function getAllStudent(dbConnection, req, res, urlData) {
    dbConnection.query(storage.Query_GetAllStudent(), (err, data, fields) => {
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
    GetStudentListWithAvg: getStudentListWithAvg,
    GetAllStudent: getAllStudent,
    RequestLastIdOfPrefix: requestLastIdOfPrefix
};