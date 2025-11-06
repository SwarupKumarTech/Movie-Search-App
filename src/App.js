import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [searchWord, setSearchWord] = React.useState('');
  const [moviesData, setMoviesData] = React.useState([]);

  const searchMovies = async () => {
    try {
      // Use "s=" to search by name, not "i="
      const apiPath = `https://www.omdbapi.com/?apikey=71fe0003&s=${searchWord}`;
      const apiResponse = await axios.get(apiPath);

      console.log('apiResponse', apiResponse.data);

      // Check if results exist
      if (apiResponse.data.Search) {
        setMoviesData(apiResponse.data.Search);
      } else {
        setMoviesData([]);
        alert('No movies found!');
      }
    } catch (ex) {
      alert('Unable to process your request');
      console.error(ex);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h3 className='text-light'>Search Movies</h3>
          <div className="card mt-4 border-0 shadow-sm">
            <div className="card-body">
              <input
                className="form-control"
                type="text"
                placeholder="Search movies or series"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
              <button className="btn btn-primary mt-3" onClick={searchMovies}>
                Search
              </button>
            </div>
          </div>

          {/* Display search results */}
          {moviesData.length > 0 && (
            <div className="mt-4">
              <h5 className='text-light'>Search Results:</h5>
              <div className="row cards mb-5 bg-white border rounded" >
                {moviesData.map((movie) => (
                  <div  className="col-md-4 mt-3 mb-2">
                    <div className="card h-100 border-black">
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="card-img-top"
                        style={{ height: '300px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <Link href={'view/'+ movie.imdbID} target='_blank' rel='noopener noreferrer'><h6>{movie.Title}</h6></Link>
                        <div>Year: {movie.Year}</div>
                        <div>Type: {movie.Type}</div>
                      </div>
                    </div> 
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
