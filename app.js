//here we will handle the rquests
const express=require('express');// we are importing the package 'express'
const bodyParser=require('body-parser');
require('dotenv/config');
const app=express();


//now you have THE ABILITY TO CREATE ROUTES

//import routes
const disasterRoute=require('./routes/disasterRoute');



//Middlewares--will execute when we run a route
app.use(bodyParser.urlencoded({extended:true}));

/*app.use((req,res,next)=>{//it setsup a middleware and an incoming request will come thru this function
    response.status(200).json({
        message:"Data sent"
    });
});*/

app.use('/disaster',disasterRoute);//when the link is entered, it will be directed to the disasterRoute file



//but first we set a listener to connect to the server
module.exports=app;


