let storage = require('../../storage/storage');
let statusCodes = require('../status-codes');

function doLogin(dbConnection, req, res, urlData)
{
    let username = urlData.username;
    let password = urlData.password;

    dbConnection.query(storage.Query_GetPasswordFrom(username), (err, data, fields) =>
    {
        if (err) res.status(statusCodes.Unauthorized).json({status: err});
        if (password.localeCompare(data[0].password) == 0)
        {
            res.status(statusCodes.OK).json({status: "Successful"});
        }
        else 
        {
            res.status(statusCodes.OK).json({status: "Wrong password"});
        }
    });
}

module.exports = 
{
    DoLogin     : doLogin
}