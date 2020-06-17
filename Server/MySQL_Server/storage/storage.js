const QUERY_SHEET   = 'mysql-queries.json';
const queryJSON     = require(`./${QUERY_SHEET}`);

function insertStudent(id_student, name_student, gender, birth, address, email, id_class)
{
    let query = queryJSON.INSERT_STUDENT + 
                `(${id_student}, ${name_student}, ${gender}, ${birth}, ${address}, ${email}, '${id_class}');`;
    // console.log(query);
    return query;
}

function listStudentsInClass(id_class)
{
    let query = queryJSON.LIST_STUDENT_IN_CLASS + `'${id_class}';`;
    // console.log(query);
    return query;
}

module.exports = 
{
    Query_ListAllClasses        : () => queryJSON.LIST_ALL_CLASSES,
    Query_ListSubjects          : () => queryJSON.LIST_SUBJECTS,
    Query_InsertStudent         : insertStudent,
    Query_ListStudentsInClass   : listStudentsInClass
}