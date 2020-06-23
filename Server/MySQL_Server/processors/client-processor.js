let path = require('path');

function processClient(app) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    })
}

module.exports = {
    ProcessClient: processClient
}