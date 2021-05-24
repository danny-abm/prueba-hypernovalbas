const express= require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
//var config = require('./config');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(cors());

//RUTAS
app.get('/api/gastos',(req,res)=>{
  //res.send('LISTA DE empleados')

   const sql = 'SELECT * FROM empleado';

   connection.query(sql,(error, results)=>{
    if (error) throw error;
    if (results.length > 0){
        res.json(results);
    } 
    else{
        res.send('Not result');
    }
   });

   
  
});

app.get('/api/gastos/:id/:id2',(req,res)=>{
    //res.send('LISTA DE empleados')
     const{id}=req.params
     const{id2}=req.params
     const sql = `SELECT empleado.*, gastos.fecha, gastos.Aprobado,gastos.Cuenta,gastos.Descripcion,gastos.Total, concepto.Concepto FROM empleado INNER JOIN gastos ON empleado.EmpleadoID =gastos.EmpleadoID INNER JOIN concepto ON concepto.ID = gastos.IdConcep WHERE empleado.EmpleadoID = ${id} AND concepto.ID=${id2}`;
  
     connection.query(sql,(error, results)=>{
      if (error) throw error;
      if (results.length > 0){
          res.json(results);
      } 
      else{
          res.send('Not result');
      }
     });
  });

//CONECTANDO CON MYSQL
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'prueba_gastos'
  });

//Validando conexion
connection.connect(error=>{
    if (error) throw error;
    console.log('Database error running');
});


app.listen(PORT,()=> console.log(`server runing on port ${PORT}`) );