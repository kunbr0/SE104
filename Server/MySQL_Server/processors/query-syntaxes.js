// const root = '/query'
const syntaxes = 
{
    listStudentsInClass: `/list-students`,
    numberOfStudentsInClass: `/number-students`,

    insert: `/add`,
    update: `/update`,
    detail: `/detail/:id`,
    summary: `/summary/:id`,
    remove: `/remove/:id`,

    login: `/login`,

    // Setup steps
    setup: {
        database: `/database`,
        admin: `/admin`,
        check: `/check`,
        finish: `/finish`,
        status: `/status`
    }
}

module.exports = syntaxes;