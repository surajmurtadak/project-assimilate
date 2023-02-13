import "../App.css";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Upload() {
    // const navigate = useNavigate();
  const [movie, setMovie] = useState({
    movieName:"",dirName:"",IMDB:"",popularity:""
  });

  let name,value;

  const MovieFunc = (event)=> {
    name = event.target.name;
    value = event.target.value;
    setMovie({...movie,[name]:value});    
  }

  const onSubmits = async(event)=>{
    event.preventDefault();
    const {movieName,dirName,IMDB,popularity,genre} = movie;

    const data = {'movieName':movieName,'dirName':dirName,'IMDB':IMDB,'popularity':popularity,'genre':genre};
      
        axios.post("http://localhost:8000/accept",data)
        .then(response=>{
            console.log(response)
            window.alert("Uploaded Successfully");
        });

     }

  return (
    <div className="container center border my-5">
      <form className="movieUpload" onSubmit={onSubmits}>
        <h1>Upload Movie Data</h1>
        <div className="mb-3 my-4">
          <input
            type="text"
            name="movieName"
            value={movie.movieName}
            onChange={MovieFunc}
            className="form-control rounded"
            id="exampleInputEmail1"
            placeholder="Movie Name"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="dirName"
            value={movie.dirName}
            onChange={MovieFunc}
            className="form-control rounded"
            placeholder="Director Name"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 row">
            <div className="col-6">
          <input
            type="number"
            name="IMDB"
            value={movie.IMDB}
            onChange={MovieFunc}
            className="form-control rounded"
            placeholder="IMDB"
            id="exampleInputPassword1"
            min="1" max="10"
            required
          />
          </div>
          <div className="col-6">
          <input
            type="number"
            name="popularity"
            value={movie.popularity}
            onChange={MovieFunc}
            className="form-control rounded"
            placeholder="Popularity"
            id="exampleInputPassword1"
            min="1" max="100"
            required
          />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={MovieFunc}
            className="form-control rounded"
            placeholder="Genre ( separate using , )"
            id="exampleInputPassword1"
            required
          />
        </div>

        <div className="d-grid gap-2 col-6 mx-auto my-4">
          <button type="submit" className="btn btn-primary rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}