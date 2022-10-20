const express=require('express');
const app=express();
const path=require('path');

const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({storage:storage})

app.set("view engine","ejs");//npm i ejs

app.get('/upload',(req,res)=>{
    res.render("upload");//Renders the upload.ejs
});

app.post("/upload",upload.single('multer-image-upload'),(req,res)=>{
    res.send("Image Uploaded");
})

app.listen(3001,()=>console.log('App is listening on 3001...'))