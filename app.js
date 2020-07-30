//here we will handle the rquests
const express=require('express');// we are importing the package 'express'
const bodyParser=require('body-parser');
require('dotenv/config');
const app=express();

const morgan=require('morgan');

//Middlewares--will execute when we run a route
app.use(bodyParser.urlencoded({extended:true}));//true allows us to extend complex bodies

app.use(morgan('dev'));

app.use((req,res,next)=>{
    res.header('Allow-Control-Allow-Origin','*')//here we want to prevent errors concerning headers and we will allow it to be used by any client hence the use of '*'
    res.header('Allow-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');//all these headers will be appended to an incoming request

    /**
     * A browser will always send an options request first when we send a PUT or post request
     * 
     */
    if(req.method ==='OPTIONS'){
        //no we tell the browser what it may send
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');//all the requests our api is going to be executing
        return res.status(200).json({});
    }
    next();
    
});

//now you have THE ABILITY TO CREATE ROUTES

//import routes
const disasterRoute=require('./api/routes/disasterRoute');

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


