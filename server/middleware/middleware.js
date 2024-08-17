require('dotenv').config();
let jwt = require('jsonwebtoken');

// let sec_key = process.env.SEC_KEY;

let sec_key = 'HELEO FROM SERVER';

function login(req,res,next) {
let token=req.cookies.token;
    if(token){
jwt.verify(token,sec_key,(err,user)=>{
req.user=user

    next()
})


    }else{

        res.send('login first')
    }
}
module.exports={login}