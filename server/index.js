require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGODB);

const movieSchema = new mongoose.Schema({ 

    popularity : String,
    director : String,
    genre:[],
    imdbScore:String,
    name:String

});

const movieCol = mongoose.model("movieCollection",movieSchema);

app.get("/send",(req,res)=>{

    movieCol.find({},(err,data)=>{
        if(err) console.log(err);
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Content-Type', 'text/html');
            res.header("Access-Control-Allow-Credentials", true);
            res.send(data);
        }
    });
});
app.post("/accept",(req,res)=>{
    res.send(req.body);
});

// app.

app.listen(5000,()=>{
    console.log("server running on 3000 port");
});