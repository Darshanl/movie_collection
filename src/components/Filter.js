import React from 'react';
import {Button} from 'react-bootstrap';
import './Filter.css';

const Filter = ({filter,onFilterClick}) => {
    if(filter === 'on'){
        return(
            <div className="container bg-filter">
                <Button 
                    onClick={onFilterClick}
                    className="color mb-2 d-inline-block bg-danger mt-2"
                    variant="outline-secondary pl-3 pr-3"
                >
                    Filter
                </Button>
                <button 
                    type="button" 
                    className="close bg-primary p-2 mt-2" 
                    aria-label="Close"
                    onClick={() => onFilterClick('off')}
                >
                    <span aria-hidden="true">
                        &times;
                    </span>
                </button>
                <br/>
                <hr style={{border:'1px solid grey'}}/>
                <div className="row text-center p-3">
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Action</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Adventure</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Animation</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Crime</Button>
                    </div>
                </div>
                <div className="row text-center p-3">
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Comedy</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Drama</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Fantasy</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Horror</Button>
                    </div>
                </div>
                <div className="row text-center p-3">
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Mystery</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Romance</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Sci-Fi</Button>
                    </div>
                    <div className="col">
                        <Button className="outline-secondary color mb-2 w-50">Thriller</Button>
                    </div>
                </div>
            </div>
        );
    }else {
        return(
            <div className="container">
                <Button 
                    onClick={() => onFilterClick('on')}
                    className="filterBtn color mb-2"
                    variant="outline-secondary pl-3 pr-3"
                >
                    Filter
                </Button>
            </div>
        );
    }
}

export default Filter;