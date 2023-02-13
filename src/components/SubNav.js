import '../App.css';
import {Link} from 'react-router-dom'
import React,{useState} from 'react';
import axios from 'axios';
export default function SubNav(){
    const [search, setSearch] = useState({
        searchName:""
      });
    
      const searchFunc = (event)=> {
        setSearch(event.target.value);    
      }
    
      const onSubmits = async(event)=>{
        event.preventDefault();
        const {searchName} = search;
    
        const data = {'searchName':searchName};
          
            axios.post("http://localhost:8000/searchData",data)
            .then(response=>{
                console.log(response)
            });
    
         }
    return(
        <div className="sub-nav justify-content-center">

            <div className=" d-flex align-content-center flex-wrap gap-2 px-4">
                <div>
                <Link className="nav-link">Sort By: </Link>
                </div>
                <button type='button' className="btn btn-outline-primary btn-sm ">
                <Link className='text-decoration-none clr'  to="/sortByMovie">Movie Name</Link>
                </button >
                <button type='button' className="btn btn-outline-primary btn-sm ">
                <Link className='text-decoration-none clr' to="/sortByPopularity">Popularity</Link>
                </button>
                <button type='button' className="btn btn-outline-primary btn-sm ">
                <Link className='text-decoration-none clr' to="/sortByIMDB">IMDB</Link>
                </button>
            </div>

            <div className="items">
                <form className="d-flex gap-1" role="search" onSubmit={onSubmits}>
                    <input className="form-control me-2" type="search" placeholder="Search Movie Name" aria-label="Search" name="dirName"
            value={search.searchName}
            onChange={searchFunc} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <button className="btn btn-primary" type="clear">clear</button>
                </form>
            </div>
        </div>
    )
}