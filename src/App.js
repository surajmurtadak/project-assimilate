import Navbar from './components/Navbar';
import './App.css';
import MoviesContainer from './components/MoviesComponent';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container my-5'>
        <MoviesContainer/>
      </div>
    </>
  );
}

export default App;
