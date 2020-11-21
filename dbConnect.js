const sql = require('mssql');

const config = {
    user: 'admin',
    password: 'sapassword',
    server: 'database-1.ctqgqsavifpp.ap-southeast-1.rds.amazonaws.com',
    database: 'CheckHistoryStory',
    port: 1433
};

const pool = new sql.ConnectionPool(config)
const poolConnection = pool.connect();

module.exports = { sql, pool, poolConnection };