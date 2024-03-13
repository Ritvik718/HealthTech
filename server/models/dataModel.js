const mongoose = require("mongoose");

const Data = new mongoose.Schema({
    age: {
        type:Number,
    },
    height:{
        type:Number,
    },
    weight: {
        type:Number,
    },
    symptoms: {
        type:String,
    },
    name: {
        type:String,
    },
    image: {
        type:String,
    }, 
    prescription: {
        type:String,
    },
}); 
const UserData = mongoose.model("FormData", Data);
module.exports = UserData;