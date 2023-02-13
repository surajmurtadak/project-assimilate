import '../App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

export default function MoviesContainer(){;
  const [movies, setMovies]= useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    return await axios.get("http://localhost:8000/sortByMovie",)
    .then((response)=> setMovies(response.data)).catch((err)=>console.log(err));
  }
    return(
       <div className='movie-container container my-3'>
          {movies.map(movie => {
            return(
            <div className="card box" key={movie._id} style={{width: "18rem"}}>
                <img src="/MovieLogo.png" className="card-img-top" alt="MovieLogo"/>
                <div className="card-body">
                  <h4 className="card-title">{movie.name}</h4>
                  <h6 className="card-text">Director:  {movie.director}</h6>
                
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item bg">Popularity: {movie.popularity}</li>
                  <li className="list-group-item bg">IMDB: {movie.imdbScore}</li>
                  <li className="list-group-item bg">Genre:<br/> {movie.genre.map(genre=>{return genre+" | "})} </li>
                </ul>
                </div>
              </div>
            )
          })}
       </div>
    )
}