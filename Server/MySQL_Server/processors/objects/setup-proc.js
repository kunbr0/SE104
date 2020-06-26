let statusCodes = require('./../status-codes');
let fs = require('fs');
let sysUtil = require('./../../utils/system');

function setupStatus(req, res) {
    res.status(statusCodes.OK).json({ error: 0, data: sysUtil.GetProgress() });
}

function receiveDBSubmission(req, res, urlData) {
    console.log(urlData);
    fs.writeFile(`./admin-setup/${sysUtil.SetupFiles().dbSetup}`, JSON.stringify(urlData), () => { });
    sysUtil.TrackSetupProgress(sysUtil.GetProgress() + 1);
    setupStatus(req, res);
}

function receiveAdminSubmission(req, res, urlData) {
    console.log(urlData);
    fs.writeFile(`./admin-setup/${sysUtil.SetupFiles().adminInfo}`, JSON.stringify(urlData), () => { });
    sysUtil.TrackSetupProgress(sysUtil.GetProgress() + 1);
    setupStatus(req, res);
}

function checkAdmin(req, res, urlData) {
    console.log(urlData);
    let admin = require(`./../../admin-setup/${sysUtil.SetupFiles().adminInfo}`);
    res.status(statusCodes.OK).json(
        { "status": admin.username == urlData.username && admin.password == urlData.password ? true : false });
}

function finishSetup(req, res, appList) {
    let mysql = require('mysql');
    // Database connection
    // let connection = mysql.createConnection(config);
    let config = require('./../../config');
    let connection = mysql.createConnection(config.CreateMySQLDBConfig('./admin-setup/dbsetup.json'));
    // Connect to database
    connection.connect((err) => {
        if (err) {
            console.log("Error connecting database...\n\n" + err);

            // Reset setup progress, force user to reconfig
            sysUtil.TrackSetupProgress(0);
            setupStatus(req, res);
            return;
        }

        console.log("Database is connected!\n\n");
        let processor = require('./../../processors/queries-processor');
        let studentApp = appList[0];
        let teacherApp = appList[1];
        let authApp = appList[2];
        // processor.ProcessQuery(api_v1, connection);
        processor.ProcessStudentQueries(studentApp, connection);
        processor.ProcessTeacherQueries(teacherApp, connection);
        processor.ProcessAuthenticationQueries(authApp, connection);

        sysUtil.TrackSetupProgress(sysUtil.GetProgress() + 1);
        setupStatus(req, res);
    });
}

module.exports =
{
    ReceiveDBSubmission: receiveDBSubmission,
    ReceiveAdminSubmission: receiveAdminSubmission,
    CheckAdmin: checkAdmin,
    Finish: finishSetup,
    Status: setupStatus
}