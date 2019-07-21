console.log("hello world");
const express= require('express');
const bp=require('body-parser');
const app =express();
var db
const mon=require("mongodb").MongoClient
mon.connect('mongodb://localhost/register',{ useNewUrlParser: true },(err,client)=>{
  if(err)return console.log(err);
  db=client.db("register-users")
  app.listen(3000,'0.0.0.0',function(){

  })
})
app.use(bp.urlencoded({extended:true}))

app.get('/',(req,res)=>{
res.sendFile(__dirname + "/index.html" );
}
)
app.post('/register',(req,res)=>{
  db.collection('register').insertOne(req.body,(err,result)=>{
    if(err)return console.log(err);
    console.log("saved to db succesfully");
    res.sendFile(__dirname + "/login.html" );
  })
})
