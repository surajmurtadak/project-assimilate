require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

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

app.get("/movie",async(req,res)=>{

      const data = await movieCol.find({}).sort({name:1});
      res.send(data);
    //    ,(err,data)=>{
    //     if(err) console.log(err);
    //     else {
    //         res.header("Access-Control-Allow-Origin", "*");
    //         res.header('Content-Type', 'text/html');
    //         res.header("Access-Control-Allow-Credentials", true);
    //         res.send(data);
    //     }
    // });
});

app.get("/popular",(req,res)=>{

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

app.get("/imdb",(req,res)=>{

    movieCol.find({},(err,data)=>{
        if(err) console.log(err);
        else {
            // res.header("Access-Control-Allow-Origin", "*");
            // res.header('Content-Type', 'text/html');
            // res.header("Access-Control-Allow-Credentials", true);
            res.send(data);
        }
    });
});

app.post("/accept",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
    
});

// app.

app.listen(8000,function(err){
    if(err) console.log(err)
    console.log("server running on 8000 port");
});