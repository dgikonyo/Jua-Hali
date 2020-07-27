//here we will handle the rquests
const express = require('express');// we are importing the package 'express'
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded(
    {
        extended: false
    }
));
app.get('/',(req,res)=>
            res.json({msg: 'Holla'})
    );
app.listen(8080,()=>console.log('listening at 8080'));