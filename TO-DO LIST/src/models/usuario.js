const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    correo: String,
    password: String
});

module.exports=mongoose.model('entradas',UsuarioSchema);