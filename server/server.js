const {config} = require('./config');

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// const db = mysql.createPool({
//   host: config.host,
//   user: config.user,
//   password: config.password,
//   database: config.database,
//   port: config.port
// }) 

const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port
})

connection.connect();


const sqlInsert = "INSERT INTO line_data (test) VALUES ('hello world') "
connection.query(sqlInsert, function(err, results, fields){
  if(err){
    console.log(err)
  }
  console.log(results)
})
app.listen(config.port, () => {
  console.log(`App server now listening to port ${config.port}`);
});

connection.end()