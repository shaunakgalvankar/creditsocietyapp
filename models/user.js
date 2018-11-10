var mongoose=require('mongoose');
const Schema= mongoose.Schema;

//to create a user schema and model

var UserSchema=new Schema({
    name:{
        type:String,
        required:[true,'name field is required']
    },
    id:{
        type:Number,
        
    },
    department:{
        type:String,

    },
    salary:{
        type:Number,

    },
    amount:{
        type:Number
    }
});

var User= mongoose.model('user',UserSchema);

module.exports = User;