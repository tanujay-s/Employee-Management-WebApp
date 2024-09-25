const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    uniqueId: {type: String, required: true},
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true}  
});


module.exports = mongoose.model('User', loginSchema);