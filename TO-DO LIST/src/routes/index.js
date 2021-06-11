const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/',async(req,res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    //res.send('Mensaje de prueba desde nodeJS'); -> mandamos un mensaje de prueba
    res.render('index',{tasks});
});

router.post('/add',async(req,res)=>{
    const task =new Task(req.body);
    await task.save();
    
    //console.log(new Task(req.body));
    console.log(task);
    //res.send('Datos recibidos desde add POST');
    res.redirect('/');
});


router.get('/turn/:id', async(req, res)=>{
    const {id} = req.params;
    const task = await Task.findById(id);
     //console.log(task);
    //res.send('Accion realizada desde Turn');
    task.status =! task.status;
    await task.save();
    res.redirect('/');   
});

router.post('/edit/:id', async(req,res)=>{
    const{id}= req.params;
    await Task.update({_id:id},req.body);
    res.redirect('/');
});


router.get('/delete/:id', async(req, res)=>{
    const {id} = req.params;
     await Task.remove({_id:id});
     res.redirect('/');
    //console.log(req.params);
    //res.send('Peticion de Borrar recibida por GET');

});

router.get('/edit/:id',async(req,res)=>{
    const{id}= req.params;
    const task = await Task.findById(id);
    res.render('edit',{task});

});



module.exports=router;