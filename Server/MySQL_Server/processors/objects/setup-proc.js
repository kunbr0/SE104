let statusCodes = require('./../status-codes');
let supportedDBMS = require('./../../utils/supported-dbms');
let fs = require('fs');
let jsonParser = require('body-parser');

function receiveDBSubmission(req, res, urlData)
{
    console.log(urlData);
    fs.writeFile("./admin-setup/dbsetup.json", JSON.stringify(urlData), ()=>{});
    res.status(statusCodes.OK).json(urlData);
}

module.exports = 
{
    ReceiveDBSubmission: receiveDBSubmission
}