const express = require('express');
const router = express.Router();


router.get('/Registro',async(req,res)=>{
    //console.log(tasks);
    //res.send('Mensaje de prueba desde nodeJS'); -> mandamos un mensaje de prueba
    res.render('log');
});



module.exports=router;