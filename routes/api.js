var express= require('express');
var router=express.Router();
var User= (require('../models/user'));


//get a list of users fetched from the database
router.get('/users',function(req,res,next){
    res.send({type:'GET'});
});

//add a user to the database
router.post('/users',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);  
});

//update a user to the database
router.put('/users/:id',function(req,res,next){
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
       User.findOne({_id:req.params.id}).then(function(ninja){
           res.send(ninja);
       });
    }); 
});

//delete a user from the database
router.delete('/users/:id',function(req,res,next){
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
        res.send(user);
    });
});

module.exports=router;