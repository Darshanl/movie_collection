import React from 'react';
import './MoviePage.css';
import {Button} from 'react-bootstrap';

const MoviePage = ({movieData,onBackClick}) => {
    return(
        <div className="container col-12 body">
             <div className="row p-3">
                <div className="col-sm-4 m-3">
                    <img 
                        className="p-3 shadow-lg p-3 mb-5 bg-white rounded"
                        src={movieData.Poster} 
                        alt="hero" 
                        style={{width: '450px', height: 'auto'}}
                    />
                </div>
                <div className="col-sm-7 m-3">
                    <p
                        className="d-flex flex-column font p-5 shadow-lg p-3 mb-5 bg-white rounded"
                        style={{minHeight:'650px'}}
                    >
                        <Button 
                            className="align-self-end text-center color mb-2 mt-2"
                            variant="outline-secondary pl-3 pr-3"
                            onClick={() => onBackClick('home')}
                        >
                            Back
                        </Button>
                        <p>
                            <span style={{fontSize:'23px'}}>Title: </span>
                            {movieData.Title}
                        </p>
                        <p>
                            <span style={{fontSize:'23px'}}>Year: </span>
                            {movieData.Year}
                        </p>
                        <p>
                            <span style={{fontSize:'23px'}}>Released on: </span>
                            ({movieData.Released})
                        </p>
                        <p>
                            <span style={{fontSize:'23px'}}>Genre: </span>
                            {movieData.Genre}
                        </p>
                        <p>
                            <span style={{fontSize:'23px'}}>Type: </span>
                            {movieData.Type}
                        </p>
                        <p className="border-bottom border-secondary pb-3">
                            <span style={{fontSize:'23px'}}>Director: </span>
                            {movieData.Director}
                        </p>
                        <p>
                            <span style={{fontSize:'23px'}}>imdb Rating: </span>
                            "{movieData.imdbRating}"
                        </p>
                        <p>
                            <span style={{fontSize:'23px'}}>Box Office: </span>
                            "{movieData.BoxOffice}"
                        </p>
                        <p> 
                            <span style={{fontSize:'23px'}}>Language: </span>
                            "{movieData.Language}"
                        </p>
                        <p>
                        <span style={{fontSize:'23px'}}>Country: </span>
                        "{movieData.Country}"
                        </p>
                        <p className="border-bottom border-secondary pb-3">
                        <span style={{fontSize:'23px'}}>Production: </span>
                        "{movieData.Production}"
                        <br />
                        </p>
                        <p>
                        <span style={{fontSize:'23px'}}>Actors: </span>
                        {movieData.Actors}
                        </p>
                        <p className="border-bottom border-secondary pb-3">
                        <span style={{fontSize:'23px'}}>Writer: </span>
                        {movieData.Writer}
                        <br />
                        </p>
                        <p>
                        <span style={{fontSize:'23px'}}>Plot: </span>
                        {movieData.Plot}
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;