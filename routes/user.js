// const express = require('express');
// const router = express.Router()
// const mysql = require('mysql')
// router.get('/messages', (reqm, res)=>{
//     console.log('Msg from user page');
//     res.end()
// }) 


// router.post('/slotReg', (req, res)=>{
//     console.log('Trying to book slot');
    
//      const mentor = req.body.mentor;
//      const slot = req.body.s; 
//      const resq = slot + ',';
//      const dos = req.body.dos;
    
// //console.log(mentor+ ' ' + slot +' ' + dos);
//      // for(var i = 0; i < 3; i++){
//     //     if(quali[i].checked === true){
//     //         resq += quali[i].value + ' ';
//     //     }
//     // }
// //    for(let r in quali){
// //        resq += r +' ';
// //    }



//     const sql = 'INSERT INTO user VALUES ?'
//     const values = [['null', mentor,resq,dos] ];
//     getConn().query(sql, [values], (err, results, fields)=>{
//         if(err){
//             console.log('failed to book slot  : ', err)
//             // res.redirect()
//             res.sendStatus(500)  
//             return ;
//         }
//         // if(err) throw err;
//         console.log('Booked new slot ', results.insertId)
//         res.end();
//     })
//     res.redirect('/next.html')
//     res.end();
// })


// function getConn(){
//     return mysql.createConnection({
//         host: 'localhost',
//         user : 'root',
//         password: '',
//         database: 'n'
//     });
// }


// module.exports = router