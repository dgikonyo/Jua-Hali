const express=require('express');
const router=express.Router();

const {allDisasters,createDisaster,singleDisaster,updateDisaster,deleteDisaster}=require('../../api/controller/DisasterController');


//gets back all the disasters in the database
router.get('/',allDisasters);

//saves data into the database
router.post('/',createDisaster);

//specific disaster
router.get('/:disasterId',singleDisaster);

//update the disaster
router.patch('/:disasterId',updateDisaster);

//delete a disaster
router.delete('/:disasterId',deleteDisaster);


module.exports=router;//here we are exporting the router