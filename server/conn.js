let mongoose=require('mongoose');

let schem=new mongoose.Schema({
name:{
    type:String
},
lname:{
    type:String,
    unique:true,
    required:true
},
email:{
    type:String,
    unique:true,
    required:true
},
hashpass:{
    type:String
},
dob:{
    type:String
},
created_at:{
    type:String
},
last_modified:{
    type:String
}

}
);
let usrs=mongoose.model('users',schem);
module.exports=usrs