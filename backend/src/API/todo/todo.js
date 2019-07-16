const restful = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    description : { type: String, require:true },
    done: { type: Boolean, require:true, default: false },
    createDate: { type: Date, default: Date.now }
})

module.exports = restful.model('ToDo', todoSchema);