const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    color: String,
    fechadeinicio: String,
    date: {type: Date, dafault: Date.now},
    status: {
        type: Boolean,
        default: false}
});

module.exports=mongoose.model('tasks',TaskSchema);

