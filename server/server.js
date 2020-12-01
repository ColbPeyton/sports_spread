const {configAccount, configDB} = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const router = express.Router();
var session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const mysql = require('mysql');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {maxAge: 6000}
// }));

const connectionAccount = mysql.createConnection({
  host: configAccount.host,
  user: configAccount.user,
  password: configAccount.password,
  database: configAccount.database,
  port: configAccount.port
})

const connectionDB = mysql.createConnection({
  host: configDB.host,
  user: configDB.user,
  password: configDB.password,
  database: configDB.database,
  port: configDB.port
})


connectionAccount.connect((err)=>{
  if(err){
    console.log('issue connecting to account')
  }else{
    console.log('connected to account')
  }
})
connectionDB.connect((err)=>{
  if(err){
    console.log('issue connecting to db')
  }else{
    console.log('connected to db')
  }
})





// const sqlInsert = "INSERT INTO line_data (test) VALUES ('hello world') "
// connection.query(sqlInsert, function(err, results, fields){
//   if(err){
//     console.log(err)
//   }
//   console.log(results)
// })
// app.listen(config.port, () => {
//   console.log(`App server now listening to port ${config.port}`);
// });

// connection.end()


app.post('/api/login', (request, response)=>{

  
  const username = request.body.user;
  const password = request.body.password;
  // const encryptedPassword = await bcrypt.hash(password, saltRounds)

  if(username && password){
    const sqlSelect = 'SELECT * FROM accounts WHERE username = ? AND password = ?';
    connection.query(sqlSelect, [username, password], async (err, results) => {
      if(results.length >0){
        const comparision = await bcrypt.compare(password, results[0].password)
        if(comparision){
            res.send({
              "code":200,
              "success":"login sucessfull"
            })
        }
        else{
          res.send({
               "code":204,
               "success":"Email and password does not match"
          })
        }
      }
      })
  }
})


app.listen(configDB.port, ()=>{
  console.log('up')
})
