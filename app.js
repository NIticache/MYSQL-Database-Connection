const express = require('express')
const bodyparser =require('body-parser')
var mysql = require('mysql')
const app = express()
const port = 3000
app.use(express.static('../MTI'))

app.use(bodyparser.urlencoded({extended:false}))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.sendFile('form.html', { root:__dirname})

  })

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hpmts'
  })

  connection.connect(function(err){
    if (err) throw err;
    console.log('Connected  successfully')
  })
    
 

app.post('/submit', function (req, res) {
    console.log(req.body);   
    var sql ="insert into form values (null,'"+req.body.firstname +"','"+req.body.lastname+"','"+req.body. areacode+"','"+req.body.telnum+"','"+req.body.emailid+"','"+req.body.company+"','"+req.body.Mobilemodel+"','"+req.body. IMEI1+"','"+req.body. IMEI2+"')"
   
        
    connection.query(sql,function (err){
      if (err) throw err;
      res.render('index', { Data: 'DATA', Dss: 'DATA SAVED SUCCESSFULY' ,Tal:'GOD IS GREAT,THANKS ALOT GOD'})
      })
  
      connection.end();
})        

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
