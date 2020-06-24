let path = require('path');

function processClient(app) {
    app.use((req, res, next) => {
        if (!req.url || req.url !== '/setup') {
            res.redirect('/setup');
        }
        next();
    })


    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    })
}

module.exports = {
    ProcessClient: processClient
}