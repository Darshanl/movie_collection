import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies,onViewClick}) => {
    return(
        <div className="container col-12 text-center">
            {
                movies.map((movie,i) => {
                    return(
                        <div className="d-inline-block" key={i}>
                            <MovieCard 
                                Title={movie.Title} 
                                Poster={movie.Poster}
                                Type={movie.Type}
                                Year={movie.Year}
                                imdbID={movie.imdbID}
                                onViewClick={onViewClick}
                                />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MovieList;