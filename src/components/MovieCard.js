import React from 'react';
import './MovieCard.css';

const MovieCard = ({Title,Poster,Type,Year,onViewClick,imdbID}) => {
    return(
        <div onClick={onViewClick.bind(this, imdbID)}>
            <div className="color card d-inline-block border-dark text-white bg-color ml-2 mr-2 mb-3 mt-3 text-center" 
            style={{width: '20rem',boxShadow:'11px 14px 25px -5px rgba(0,0,0,0.75)'}}>
                <div className="card-header d-flex justify-content-center mt-3">
                    <img className="pb-3 rounded" src={Poster} alt="Movie" style={{width: '90%', height: 'auto'}} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <hr />
                    <p className="card-text text-center pl-2">
                        <span className='Main-color'>Type:</span>
                        {Type}<br/>
                        <span className='Main-color'>Year:</span>
                        {Year}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;