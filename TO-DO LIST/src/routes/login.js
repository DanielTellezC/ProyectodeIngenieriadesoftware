const express = require('express');
const rout = express.Router();

const Entrada = require('../models/usuario');

rout.get('/Registro', async(req, res) => {
    const entrada = await Entrada.find();
    res.render('log');
});
/*
router.post('/add',async(req,res)=>{
    const task =new Task(req.body);
    await task.save();
    
    //console.log(new Task(req.body));
    console.log(task);
    //res.send('Datos recibidos desde add POST');
    res.redirect('/');
});*/

rout.post('/adduser',async(req,res)=>{
    const entrada =new Entrada(req.body);
    await entrada.save();
    
    //console.log(new Task(req.body));
    console.log(entrada);
    //res.send('Datos recibidos desde add POST');
    res.redirect('/Registro');
})
/*
router.post('/adduser',async(req,res)=>{
    const entrada = new Entrada(req.body);
    const { correo, password, password_confirm} = new Entrada(req.body);
    const PRUEBA = new Entrada(req.body);
    console.log(PRUEBA);
    console.log(password, correo, password_confirm);
    if(password == password_confirm) {
        if (password > 4 ){
            const emailUser = await User.findOne({ correo: correo });
            if (!emailUser) {
                //const entrada = new Entrada(req.body);
                await entrada.save();
            
                res.redirect('/Notas');
            }
        }
    }
    res.redirect('/Registro');
});
*/


module.exports=rout;