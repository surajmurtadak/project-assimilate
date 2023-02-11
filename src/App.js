import Navbar from './components/Navbar';
import './App.css';
import MoviesContainer from './components/MoviesComponent';
import SubNav from './components/SubNav';

function App() {
  return (
    <>
      <Navbar/>
      <SubNav/>
      <div className='container my-3'>
        <MoviesContainer/>
      </div>
    </>
  );
}

export default App;
