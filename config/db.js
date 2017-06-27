var mysql = require('mysql');

var pool  = mysql.createPool({
  host            : '192.168.1.10',
  user            : 'root',
  password        : 'root',
  database        : 'node'
});

module.exports = pool;