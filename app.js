const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const mysql = require('mysql')

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))

function getConn(){
    return mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password: '',
        database: 'NODEMYSQL'
    });
}



// CREATING DB:
// getConn().connect((err)=>{
//     if(err) throw err;
//     console.log('Connnected');
// //     // create database
//     const db = 'CREATE DATABASE NODEMYSQL'
//    getConn().query(db, (err, res)=>{
//          if(err) throw err;
//         console.log('Database created')
//     })
//  })


// CREATING TABLE:
// getConn().connect((err)=>{
//      if(err) throw err;
//      console.log('Connected');
//        const db = 'CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY,mentor VARCHAR(20), slot VARCHAR(50), dos VARCHAR(50))';
// //     conn.query(sql, (err)=>{
//     getConn().query(db, (err, res)=>{
//        if(err) throw err;
//         console.log('Table created')
//     })
//  })


INSERTING DATA:
getConn().connect((err)=>{
     if(err) throw err;
     console.log('Connected');
     const sql = 'INSERT INTO user VALUES ?';
    const values = [
        //  ['null','m2', '1AM-2AM', '09-04-2776'],
        //   ['null','m3', '4AM-5AM', '02-03-2776']
          ['null','Sumeet Malik', '1AM-2AM', '09-04-2776'],
          ['null','Abhishek Verma', '4AM-5AM', '02-03-2776']
   ]
getConn().query(sql, [values], (err, results)=>{
        if(err) throw err;
        console.log('Data inserted  ', results.affectedRows);
     })
 })


// const router = require('./routes/user')

// app.use(router)


// //Fetch all students
// app.get('/user', (req, res)=>{
//     console.log('Fetching all user ');

//     const sql = 'SELECT * FROM user';
//     // const vl = req.params.id
//     getConn().query(sql, (err, rows,results)=>{
//         if(err){
//             console.log('Failed to fetch all users data');
//             res.sendStatus(500);
//             res.end();
//             return
//         }
//         console.log('I think we fetched student succesfully');
//         res.json(rows);
        
//     })
// })


// //Fetch user accordingly with ID
// app.get('/user/:id', (req, res)=>{
//     console.log('Fetching user with id: ', req.params.id)

//     const sql = 'SELECT * FROM user WHERE id = ?';
//     const value = req.params.id;
//     getConn().query(sql, [value], (err, rows, fields)=>{
//         if(err){
//             console.log('Failed to fetch user with id : ', err);
//             res.sendStatus(500)
//             res.end()
//         }
//         console.log('I think we fetch user with id succesfully');
//         res.json(rows);
        
//     })
// })


app.get('/', (req,res)=>{
    console.log('responding to root route');
    res.send('Your node is successfully setup');
})

app.listen(3333, ()=>{
    console.log('server running port is 3333');
})