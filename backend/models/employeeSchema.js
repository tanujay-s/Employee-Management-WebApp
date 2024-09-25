const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    uniqueId:{type:String, required:true, unique:true},
    image:{type:String},
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    mobile: {type: String, required:true},
    designation: {type: String, enum: ['HR', 'Sales', 'Manager', 'Other'], required: true},
    gender: {type: String, enum: ['Male', 'Female'], required: true},
    course: {type: String, enum: ['BCA', 'MCA', 'BSC', 'Other'], required: true},
    createdAt: {type: Date, default: Date.now} 
});

module.exports = mongoose.model('Employee',employeeSchema);