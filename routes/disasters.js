const express=require('express');
const router=express.Router();
const Disaster=require('../models/Disaster');


//saves data into the database
router.post('/',async (req,res)=>{
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
   
});

//gets back all the disasters in the database
router.get('/',async (req,res)=>{
    try{
       const disaster=await Disaster.find().limit(2);
       res.json(disaster);
    }catch(err){
        res.json({message:err});
    }
});


//specific disaster
router.get('/:disasterId',async(req,res)=>{
    try{
        const disaster=await Disaster.findById(req.params.disasterId);
        res.json(disaster); 
    }catch(err){
        res.json({message:err});
    }
    
});

//update the disaster
router.patch('/:disasterId',async(req,res)=>{
    try{
        const updatedDisaster=await Disaster.updateOne(
            {_id: req.params.disasterId},
            {$set:{responseStatus:req.body.responseStatus}}
            );
            res.json(updatedDisaster);


    }catch(err){
        req.json({message:err});
    }
    
});

//delete a disaster
router.delete('/:disasterId',async(req,res)=>{
    try{
        const removeDisaster=await Disaster.remove({_id: req.params.disasterId});
        res.json(removeDisaster);
    }catch(err){
        req.json({message:err});
    }
    
});


module.exports=router;//here we are exporting the router