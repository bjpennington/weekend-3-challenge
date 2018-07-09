// bring in mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create to-do schema
let toDoSchema = new Schema ({
    task : {type: String, required: true},
    completeStatus : {type: Boolean, required: true, default: false},
    category : {type: String, required: true, default: 'Uncategorized'}
});

// export schema
module.exports = mongoose.model('ToDo', toDoSchema);