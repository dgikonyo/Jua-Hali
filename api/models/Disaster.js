const mongoose=require('mongoose');

const DisasterSchema=mongoose.Schema({//will describe how our data looks like
    disasterName:{
        type:String,
        minlength:[5,'Disaster name cannot be less than 5 characters'],
        maxlength:[30,'Disaster Name cannot be more than 30 characters '],
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
        default:Date.now()
    },
    responseStatus:{
        type:String,
        default: "Not addressed"
    },

});

module.exports=mongoose.model('Disaster',DisasterSchema);
