const express = require('express');
let mongoose = require('mongoose');
let bcrypt=require('bcrypt');
const cookieParser = require('cookie-parser');
let jwt = require('jsonwebtoken');
let {login}=require('./middleware/middleware.js')
let {loginm}=require('./middleware/loginmiddleware.js')
const bodyParser = require('body-parser');

const app = express();
const usr = require('./conn.js');
require('dotenv').config();
const cors = require('cors');
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your client's domain
  credentials: true,
};
// middlewares
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json()); // Parse JSON requests
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded forms (optional)


// mongo connection 
let uri = process.env.WOW_MONGO;

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'));

//  SECRET KEY
let sec_key = 'HELEO FROM SERVER';





// profile  route

app.get('/profile',login, async (req, res) => {
    let dataf = await usr.find({});
   
    console.log()
    res.json(dataf);
  })

// homepage route
app.get('/', async (req, res) => {
    let dataf = await usr.find({});
    console.log();
    res.json(dataf);
  })



// signup api

app.post('/post', async (req, res) => {
    try {
        const { name, lname,email, pass, dob } = req.body;
let created_at=date.toLocaleDateString()+''+ date.toLocaleTimeString();
let hashpass=await bcrypt.hash(pass,12)
        const formdata = await { name, lname,email,hashpass, dob ,created_at};
        console.log(formdata);

        let mem = await new usr(formdata);
        let data = await mem.save();
        res.send('data submited')

        console.log(data)
    }
    catch (err) {
        if (err.code === 11000) {
            console.log(err, 'user already exisist !')
            res.send('provide uniqe username')
        } else {

            console.log('data submited')
        }
    }


}

)




// login function

app.post('/login',async function (req, res) {

    
 
  let {email,pass}=req.body;
 

  try {
  
    let dataf = await usr.findOne({email});
    let password=await bcrypt.compare(pass,dataf.hashpass)
 
  
    if(dataf && password){
     const token= jwt.sign({email,pass},sec_key);
     res.cookie('token', token);
     res.send('You are true user ')
     
   

  
    
     }
     else{
      res.send('please enter valaid email')
     }
   
if(!password){
console.log('password is incorecct')


}

    
  } 
  
  catch (error) {
   console.log(error)
  }
  
  
  });


  app.patch('/update',async(req,res)=>{

    
      let {uemail, name, lname,email, pass, dob } = req.body;
      let last_modified=date.toLocaleDateString()+''+ date.toLocaleTimeString();
      let data = await usr.findOne({email:uemail});
      name = (name === "") ? data.name : name;
      lname = (lname === "") ? data.lname : lname;
      email = (email === "") ? data.email : email;
      dob = (dob === "") ? data.dob : dob;
      pass= (dob === "") ? data.hashpass : pass;
      const formdata = { name, lname,email,pass, dob ,last_modified};
      console.log(data)

if(data){

let upd=await usr.updateOne({email:uemail},{$set:formdata});
console.log(upd)
res.send('ok hia bro')


}
else{

res.send('enterr valid email')

}
     
}




)
  
  // Delete api 
  // delete a documents 
app.delete('/pd/:id',async function(req, res) {
  const { id } = req.params;
  let resultd=await usr.deleteOne({_id:id})
  res.send(`Delete record with id ${id}`);
});
let date=new Date()
console.log(date.toLocaleDateString()+''+ date.toLocaleTimeString());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))