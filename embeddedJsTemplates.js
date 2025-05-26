const express=require('express');
const app=express();
const Path=require('path');


app.listen(4000,()=>{
  console.log("http://localhost:4000/");
})


//  no need to require ejs
app.set('view engine','ejs');
app.set('views',Path.join(__dirname,'/views'))


// We render the data using ejs
app.get('/',(req,res)=>{
  res.send('Home')
})


app.get('/about/:name',(req,res)=>{
  res.render('home.ejs',{name:req.params.name})
})


app.get('/ig/:username',(req,res)=>{
  let {username}=req.params
  res.render('insta.ejs',{username})
})


app.get('/home',(req,res)=>{
  res.render('home.ejs')
})



