import '../App.css';
export default function SubNav(){
    return(
        <div className="sub-nav justify-content-center">
            <div className="items">
                <select class="form-select" aria-label="Default select example">
                    <option selected>sort by</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="items">
                <select class="form-select" aria-label="Default select example">
                    <option selected>filter by</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="items">
                <form class="d-flex gap-1" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    <button class="btn btn-primary" type="clear">clear</button>
                </form>
            </div>
        </div>
    )
}