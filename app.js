const express = require("express");
const app= express();
const mongoose = require("mongoose");
app.use(express.json());
var routes = require('./route/routes');

app.use(routes);
const mongodburl="mongodb+srv://AbilashDahanabal:Abilashar1503@guvi-fsd-task.txyin1w.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(mongodburl, { user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to database");
}).catch(e=>console.log(e));
app.listen(5000,()=>{
    console.log("server started");
});

// app.post("/post",async(req,res)=>{
//     console.log(req.body);
//     const {data}=req.body;

//     try{
//         if(data=="Abilash"){
//             res.send({status:"OK"})
//         }else{
//             res.send({status:"User not found"})
        
//         }
//     }catch(error){
//         res.send({status:"Something went wrong"});
//     }
    
// });