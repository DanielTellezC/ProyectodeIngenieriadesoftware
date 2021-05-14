const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app= express();

//Conectar a base de datos MongoDB
mongoose.connect('mongodb://localhost/ejercicio')
    .then(db=>console.log('MongoDB Conectado'))
    .catch(err=> console.log('BD no conectada'));


//Importar rutas
const indexRoutes = require('./routes/index');

//Configuraciones
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname, 'views')); 
app.set('view engine','ejs');


//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//Rutas
app.use('/',indexRoutes);


//Cofiguracion de servidor 
app.listen(app.get('port'),()=>{
    console.log(`server en puerto ${app.get('port')}`);
});
