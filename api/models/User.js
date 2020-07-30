const { Schema } = require("mongoose");

const mongoose=require('mongoose');


const userSchema=new Schema({
    username:String,
    email:String,
    password:String
});

const userModel=mongoose.model('User',userSchema);

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};