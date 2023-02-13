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
    const {movieName,dirName,IMDB,popularity} = movie;

    const data = {'movieName':movieName,'dirName':dirName,'IMDB':IMDB,'popularity':popularity};
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/json',
        'Access-Control-Allow-Credentials': true

      };
      
        axios.post("http://localhost:8000/accept",data)
        .then(response=>{
            console.log(response)
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
        <label htmlFor="btn-check">Genre</label>
        <div
          className="btn-group d-flex justify-content-center round"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck1"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btncheck1">
            Action
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck2"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btncheck2">
            Drama
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck3"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btncheck3">
            Romance
          </label>
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