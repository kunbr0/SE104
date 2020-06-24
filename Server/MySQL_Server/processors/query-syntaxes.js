// const root = '/query'
const syntaxes = 
{
    listStudentsInClass: `/list-students`,
    numberOfStudentsInClass: `/number-students`,

    insert: `/add`,
    update: `/update`,
    detail: `/detail/:id`,
    remove: `/remove/:id`,

    login: `/login`,

    // Setup steps
    database: `/database`
}

module.exports = syntaxes;