import '../App.css';

let select;
export default function SubNav(){

const handleChange= event => {
    select = event.target.value;
    console.log(select)
}

    return(
        <div className="sub-nav justify-content-center">
            <div className="items">
                <select className="form-select" onChange={handleChange} id="sortBy" placeholder="HELLO" >
                    <option defaultValue disabled="disabled">sort by</option>
                    <option value="MovieName" >Movie Name</option>
                    <option value="Popularity" >Popularity</option>
                    <option value="IMDB" >IMDB</option>
                </select>
            </div>
            <div className="items">
                <form className="d-flex gap-1" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <button className="btn btn-primary" type="clear">clear</button>
                </form>
            </div>
        </div>
    )
}

export {select};