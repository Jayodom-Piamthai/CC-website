const { database, password } = require('pg/lib/defaults');

const Pool =  require('pg').pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "appying",
    password: "TimeGoesOn",
    port: 5432,

})

module.exports = pool;