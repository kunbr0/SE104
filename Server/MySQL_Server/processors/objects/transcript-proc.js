let storage = require('./../../storage/storage');
let statusCodes = require('./../status-codes')

function getTranscriptOfSubject(dbConnection, req, res, urlData)
{
    dbConnection.query(storage.Query_GetSubjectTranscript(), [urlData.class_name, urlData.sem_name, urlData.subj_name], (err, data, fields) => 
    {
        if (err) { res.send(err); return; }
        res.status(statusCodes.OK).json(data);
    });
}

module.exports = 
{
    GetTransciptOfSubject: getTranscriptOfSubject,
};