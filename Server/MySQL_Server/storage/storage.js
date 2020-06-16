let fs = require('fs');
const QUERY_SHEET = 'mysql-queries.json';
const queryJSON = require(`./${QUERY_SHEET}`);

module.exports = 
{
    // GetQuerySheet: getQuerySheet,
    // ListClasses: queryStore["LIST_CLASSES"]
    // GetQuery: getQuery,
    Query_ListClasses: () => queryJSON.LIST_CLASSES,
    Query_ListSubjects: () => queryJSON.LIST_SUBJECTS
}