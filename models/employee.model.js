const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    city: {
        type: String
    }
});
var employeeModel = mongoose.model('Employee', employeeSchema);
module.exports = employeeModel;