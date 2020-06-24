let statusCodes = require('./../status-codes');
let supportedDBMS = require('./../../utils/supported-dbms');

function receiveDBSubmission(req, res, urlData)
{
    console.log("Received");
}

module.exports = 
{
    ReceiveDBSubmission: receiveDBSubmission
}