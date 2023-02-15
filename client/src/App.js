import React, { useEffect, useState } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MovieComponent from './components/MovieComponent/MovieComponent';
import SearchComponent from './components/SearchComponent/SearchComponent';

const DEFAULT_MOVIE_URL = "http://www.omdbapi.com/?s=man&plot=full&apikey=51a319e";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(DEFAULT_MOVIE_URL)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
      })
  },[])

  const search = (searchValue) => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=51a319e`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search)
      })
  }
  return (
    <div className="App">
      <HeaderComponent title="Hooked"/>
      <SearchComponent search={search}/>
      <div className="Movie-container">
        {movies ? 
          (movies.map((movie, index)=> (<MovieComponent key={`${index}-${movie.Title}`} movie={movie}/>))): "No Movies to List"
        }
      </div>
    </div>
  );
}

export default App;
