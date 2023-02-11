import '../App.css';
import React from 'react';
import data from '../movies.json';
export default function MoviesContainer(){
    return(
       <div className='movie-container'>
          {data.map(movie => {
            return(
            <div className="card box" style={{width: "18rem"}}>
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