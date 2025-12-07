const express=require("express");
const app=express();


app.get('/',(req,res)=>{
    res.send("welcomr to deveops using docker and jenkins");
});
app.listen(3000,()=>console.log("server is running st 3000"));