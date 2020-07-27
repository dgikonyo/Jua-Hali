const mongoose=require('mongoose');

const DisasterSchema = mongoose.Schema({//will describe how our data looks like
    disasterName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dateDiscovered:{
        type:Date,
        default:Date.now
    },
    responseStatus:{
        type:String,
        default: "Not addressed"
    },

});

module.exports = mongoose.model('Disaster',DisasterSchema);