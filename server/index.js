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

app.get("/send",async(req,res)=>{
    const data = await movieCol.find({});
    res.send(data);
});

app.get("/sortByMovie",async(req,res)=>{
      const data = await movieCol.find({}).sort({name:1});
      res.send(data);
});

app.get("/sortByPopularity",async(req,res)=>{
    const data = await movieCol.find({}).sort({popularity:-1});
    res.send(data);
});

app.get("/sortByIMDB",async(req,res)=>{
    const data = await movieCol.find({}).sort({imdbScore:-1});
    res.send(data);
});

app.get("/findData",async(req,res)=>{
    const data = await movieCol.find({
        
    });
    res.send(data);
});

app.post("/accept",(req,res)=>{

    let genreList = req.body.genre;
    genreList = genreList.split(",");

    const movie1 = new movieCol({
        popularity : req.body.popularity ,
        director : req.body.dirName,
        genre : genreList,
        imdbScore : req.body.IMDB,
        name : req.body.movieName
    });
    movie1.save((err)=>{
        if(err) console.log(err);
        else res.send(req.body);
    });
    console.log(req.body);
    
    
});

app.post("/accept",(req,res)=>{

    let genreList = req.body.genre;
    genreList = genreList.split(",");


    console.log(req.body);  
});

app.listen(8000,function(err){
    if(err) console.log(err)
    console.log("server running on 8000 port");
});