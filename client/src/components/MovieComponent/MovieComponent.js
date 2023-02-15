import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const MovieComponent = ({movie}) => {
    const poster = movie.Poster === 'N/A' ?  DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return(
        <div>
            <h2>{movie.Title}</h2>
            <div>
                <img alt={movie.title} src={poster} width='200px'/>
            </div>
            <p>{movie.Year}</p>
        </div>
    )
}

export default MovieComponent;