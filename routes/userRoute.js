const app=require('./app');


app.post('/users',[
    UserController.insert
]);