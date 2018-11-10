var express= require('express');
var routes=require('./routes/api');
var bodyParser=require('body-parser');
var mongoose=require('mongoose')

//setting up the express app
var app=express();
 
//connect to mongodb
mongoose.connect('mongodb://localhost/creditserver',{ useNewUrlParser: true });
mongoose.Promise=global.Promise

//access the json data sent in the post request
app.use(bodyParser.json());

//for accessing the routes present in the routes folder and to access them from here..header included...
app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});
 
app.listen(4000,function(){
    console.log('listening for requests on port 4000'); 
});