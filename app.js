//here we will handle the rquests
const express=require('express');// we are importing the package 'express'
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//now you have THE ABILITY TO CREATE ROUTES

//import routes
const disasterRoute=require('./routes/disasters');



//Middlewares--will execute when we run a route
/*app.use((req,res,next)=>{//it setsup a middleware and an incoming request will come thru this function
    response.status(200).json({
        message:"Data sent"
    });
});*/

app.use('/disaster',disasterRoute);//when the link is entered, it will be directed to the disasterRoute file


//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },()=>console.log('JUAHALI DATABASE CONNECTED'));

//but first we set a listener to connect to the server
app.listen(3000);



