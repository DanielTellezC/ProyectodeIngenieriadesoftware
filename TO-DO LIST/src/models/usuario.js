const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    nombre: String,
    password: String,
    password_confirm: String,
    date: {type: Date, dafault: Date.now},
});

module.exports=mongoose.model('usuario',TaskSchema);

