const http=require('http');//is an import for the http package
const app=require('./app');//will access the app.js file
const mongoose=require('mongoose');
const port=process.env.PORT || 3000;

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,{
     useNewUrlParser: true ,
     useUnifiedTopology:true,
     useFindAndModify:false,
    },err=>{
        if(err) return console.log('Database connection failed');
        console.log('Database connection successful');
         
    });


app.listen(port,()=>{
    console.log('Server is running port 3000...');
    
});