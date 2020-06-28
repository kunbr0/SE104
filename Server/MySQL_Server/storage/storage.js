const QUERY_SHEET   = 'mysql-queries.json';
let queryJSON     = require(`./${QUERY_SHEET}`);
const bcrypt        = require('bcrypt');

function setupDatabase(dbName)
{
    let query = `${queryJSON.CREATE_DB}${dbName};`// \n${queryJSON.USE_DB}${dbName};`;
    console.log(query);
    return query;
}

function useDatabase(dbName)
{
    let query = `${queryJSON.USE_DB}${dbName};`;
    console.log(query);
    return query;
}

function setupTables(onCompleted, onError)
{
    let fs = require('fs');
    fs.readFile('./storage/mysql-setup/setup-tables.sql', 'utf8', (err, data) => 
    {
        if (err)
        {
            onError(err);
            return;
        }
        onCompleted(data);
    });
}

function insertStudent(id_student, name_student, gender, birth, address, email, id_class)
{
    let query = queryJSON.INSERT_STUDENT + 
                `('${id_student}', '${name_student}', '${gender}', '${birth}', '${address}', '${email}', '${id_class}');`;
    console.log(query);
    return query;
}

function updateStudent(id_student, name_student, gender, birth, address, email, id_class)
{
    let pack = queryJSON.UPDATE_STUDENT;
    let query = pack.MAIN_PART + 
                `${pack.NAME}'${name_student}'` + 
                `${pack.GENDER}'${gender}'` + 
                `${pack.DOB}'${birth}'` + 
                `${pack.ADDRESS}'${address}'` + 
                `${pack.EMAIL}'${email}'` + 
                `${pack.CLASSID}'${id_class}'` + 
                `${pack.STUDENT_ID}'${id_student}';`;
    console.log(query);
    return query;
}

function getStudent(id_student)
{
    let query = queryJSON.STUDENT_DETAIL + `'${id_student}'`;
    console.log(query);
    return query;
}

function removeStudent(id_student)
{
    let query = queryJSON.REMOVE_STUDENT + `'${id_student}';`;
    console.log(query);
    return query;
}

function listStudentsInClass(id_class)
{
    let query = queryJSON.LIST_STUDENT_IN_CLASS + `'${id_class}';`;
    // console.log(query);
    return query;
}

function getNumberOfStudentsInClass(id_class)
{
    let queryPack = queryJSON.NUMBER_OF_STUDENTS_IN_CLASS;
    // console.log(queryPack);
    let query = queryPack.MAIN_PART + `'${id_class}'` + queryPack.ALIAS;
    // console.log(query);
    return query;
}

function insertTeacher(id_user, password, username, fullname, gender, birth, address, email)
{
    // let saltRounds = 10;
    // let encryptedPassword = bcrypt.hashSync(password, saltRounds);
    let encryptedPassword = password;
    let query = queryJSON.INSERT_TEACHER + 
                `('${id_user}', '${encryptedPassword}', '${username}', '${fullname}', '${gender}', '${birth}', '${address}', '${email}');`;
    console.log(query);
    return query;
}

function updateTeacher(id_user, username, fullname, gender, birth, address, email)
{

}

function getTeacher(id_user)
{
    let query = queryJSON.TEACHER_DETAIL + 
                `'${id_user}'`;
    console.log(query);
    return query;
}

function insertClass(id_class, name_class, grade, session)
{
    let query = queryJSON.INSERT_CLASS + 
        `('${id_class}', '${name_class}', ${grade}, ${session});`
    console.log(query);
    return query;
}


function getPasswordFrom(username)
{
    let query = queryJSON.LOGIN_VERIFICATION + 
        `'${username}';`
    console.log(query);
    return query;
}

module.exports = 
{
    Query_SetupDatabase             : setupDatabase,
    Query_UseDatabase               : useDatabase,
    Query_SetupTables               : setupTables,
    Query_ListAllClasses            : () => queryJSON.LIST_ALL_CLASSES,
    Query_ListSubjects              : () => queryJSON.LIST_SUBJECTS,
    Query_InsertStudent             : insertStudent,
    Query_ListStudentsInClass       : listStudentsInClass,
    Query_GetNumberOfStudentsInClass: getNumberOfStudentsInClass,
    Query_InsertTeacher             : insertTeacher,
    Query_GetTeacherInfo            : getTeacher,
    Query_UpdateStudent             : updateStudent,
    Query_GetStudent                : getStudent,
    Query_RemoveStudent             : removeStudent,
    Query_InsertClass               : insertClass,
    Query_GetPasswordFrom           : getPasswordFrom
}