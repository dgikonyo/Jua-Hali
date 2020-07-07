const mongoose=require('mongoose');
const Disaster=require('../models/Disaster');

exports.allDisasters=async (req,res)=>{
    try{
       const disaster=await Disaster.find();
       res.status(200).json({
           status:"success",
           data:{
               disaster
           }
       });
    }catch(err){
        res.json({message:err.message});
    }
}
exports.createDisaster=async (req,res)=>{
    const disaster=new Disaster({
        disasterName:req.body.disasterName,
        location:req.body.location,
        description:req.body.description,
        responseStatus:req.body.responseStatus
    });
    try{
        const savedDisaster=await disaster.save();
        res.json(savedDisaster);
    }catch(err){
        res.json({message:err});
    }
   
}
exports.singleDisaster=async(req,res)=>{
    try{
        const disaster=await Disaster.findById(req.params.disasterId);
        res.json(disaster); 
    }catch(err){
        res.json({message:err});
    }
    
}
exports.updateDisaster=async(req,res)=>{
    try{
        const updatedDisaster=await Disaster.findByIdAndUpdate(
            req.params.disasterId,{responseStatus:req.body.responseStatus},{new:true});
            res.send(updatedDisaster);

    }catch(err){
        res.json({message:err});
    }
    
}
exports.deleteDisaster=async(req,res)=>{
    try{
        const removeDisaster=await Disaster.remove({_id: req.params.disasterId});
        res.json(removeDisaster);
    }catch(err){
        req.json({message:err});
    }
    
}