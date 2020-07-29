//here we will handle the rquests
const express=require('express');// we are importing the package 'express'
const bodyParser=require('body-parser');
require('dotenv/config');
const app=express();

const morgan=require('morgan');


//now you have THE ABILITY TO CREATE ROUTES

//import routes
const disasterRoute=require('./api/routes/disasterRoute');



//Middlewares--will execute when we run a route
app.use(bodyParser.urlencoded({extended:true}));//true allows us to extend complex bodies

app.use(morgan('dev'));

/*app.use((req,res,next)=>{//it setsup a middleware and an incoming request will come thru this function
    response.status(200).json({
        message:"Data sent"
    });
});*/

//when the link is entered, it will be directed to the disasterRoute file
app.use('/disaster',disasterRoute);

//now we want to handle all requests and errors coming from requests
app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);//will forward the error request incase of an error
});

//from there we create a middleware to handle all sorts of errors
app.use((error,req,res,next)=>{
    res.status(error.status || 500); //will be used to handle all other forms of errors including the one we created
    res.json({
        error:{
            message:error.message
        }
    });
});




//but first we set a listener to connect to the server
module.exports=app;


