// let config = 
// {
//     host        : 'localhost',
//     user        : 'bach',
//     password    : 'Bach01248',
//     database    : 'STUDENTMANAGEMENT',
//     insecureAuth: true
// };
function createConfigFromJSON(path)
{
    let dbConfig = require(path);
    let config = 
    {
        host    : dbConfig.hostname,
        user    : dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.dbname,
        insecureAuth: true
    } 
    console.log(config);
    return config;
}

module.exports = 
{
    CreateMySQLDBConfig: createConfigFromJSON
}