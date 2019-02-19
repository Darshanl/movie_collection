import React from 'react';
import './SearchField.css';
import {Button} from 'react-bootstrap';

const SearchField = ({onInputChange, onButtonClick, SearchField}) => {
    return(
        <div className="mt-4 d-flex justify-content-center mb-4">
            <input 
                className="pl-2"
                type="text" 
                name="mname" 
                value={SearchField}
                placeholder="Search Movie..."
                onChange={onInputChange}
            />
            <Button 
                className="ml-2" 
                variant="primary" 
                onClick={onButtonClick}>
                Search
            </Button>
        </div>
    );
}

export default SearchField;