const mongoose = require('mongoose'); // import package name mongoose

const userSchema = new mongoose.Schema({ // invoke schema function of mongoose
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    age: Number

}, { timestamps: true });
module.exports = mongoose.model('User', userSchema) // users