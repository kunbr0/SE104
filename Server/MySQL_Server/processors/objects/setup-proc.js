let statusCodes = require('./../status-codes');
let fs = require('fs');
let sysUtil = require('./../../utils/system');

function receiveDBSubmission(req, res, urlData) 
{
    console.log(urlData);
    fs.writeFile(`./admin-setup/${sysUtil.SetupFiles().dbSetup}`, JSON.stringify(urlData), () => { });
    res.status(statusCodes.OK).json({ "nextStep": sysUtil.TrackSetupProgress(sysUtil.GetProgress() + 1) });
}

function receiveAdminSubmission(req, res, urlData) 
{
    console.log(urlData);
    fs.writeFile(`./admin-setup/${sysUtil.SetupFiles().adminInfo}`, JSON.stringify(urlData), () => { });
    res.status(statusCodes.OK).json({ "nextStep": sysUtil.TrackSetupProgress(sysUtil.GetProgress() + 1) });
}

function checkAdmin(req, res, urlData)
{
    console.log(urlData);
    let admin = require(`./../../admin-setup/${sysUtil.SetupFiles().adminInfo}`);
    res.status(statusCodes.OK).json(
        { "status" : admin.username == urlData.username && admin.password == urlData.password ? true : false});
}

function finishSetup(appList)
{
    let mysql = require('mysql');
    // Database connection
    let connection  = mysql.createConnection(config);
    // Connect to database
    connection.connect((err) => 
    {
        // crypt.AES.Encrypt('11112000Bach', "!@#@#@!#",(result) => {console.log('Encryption successful with ' + result); });
        // crypt.AES.Decrypt('2bbd70925fc2ba3560bc36e381e4b8ef', "!@#@#@!#", (result) => console.log('Decryption successful with ' + result));
        if (err) 
            console.log("Error connecting database...\n\n" + err);
        else 
            console.log("Database is connected!\n\n");
    });

    let processor = require('./../../processors/queries-processor');
    let studentApp = appList[0];
    let teacherApp = appList[1];
    let authApp = appList[2];
    // processor.ProcessQuery(api_v1, connection);
    processor.ProcessStudentQueries(studentApp, connection);
    processor.ProcessTeacherQueries(teacherApp, connection);
    processor.ProcessAuthenticationQueries(authApp, connection);
}

module.exports =
{
    ReceiveDBSubmission: receiveDBSubmission,
    ReceiveAdminSubmission: receiveAdminSubmission,
    CheckAdmin: checkAdmin,
    Finish: finishSetup
}