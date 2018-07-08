const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let toDoSchema = new Schema ({
    task : {type: String, required: true},
    completeStatus : {type: Boolean, required: true, default: false},
    category : {type: String, required: true, default: 'Uncategorized'}
});

module.exports = mongoose.model('ToDo', toDoSchema);