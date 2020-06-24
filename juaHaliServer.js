const http=require('http');//is an import for the http package

const port=process.env.PORT || 3000;

const server=http.createServer();//here we havecreated the server

server.listen(port);//here w