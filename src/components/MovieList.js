import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
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
                                />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MovieList;