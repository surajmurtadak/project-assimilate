import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Assimilate Technology </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/upload">Upload Movie</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Movie">Movie List</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
};