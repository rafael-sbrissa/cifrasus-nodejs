var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'RjmS@1991*',
        database: 'payfast'
    });
}

module.exports = function() {
    return createDBConnection;
};