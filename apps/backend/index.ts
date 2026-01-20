import express from "express";
import { TrainModel, GenerateImage, GenerateImageFromPack } from "common/types";

const app = express();
const PORT = process.env.PORT || 3000;

app.post("/ai/training",(req,res)=>{

})

app.post("/ai/generate0",(req,res)=>{

})

app.post("/package/generate",(req,res)=>{

})

app.get("/package/bulk",(req,res)=>{

})

app.get("/image",(req,res)=>{
    
})

app.listen(PORT,()=>{
    console.log("server is running on 3000");
})