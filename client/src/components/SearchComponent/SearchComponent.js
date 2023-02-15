import React, { useState } from 'react';

const SearchComponent = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInput = (e) => {
       setSearchValue(e.target.value);
    }

    const resetInput = () => {
        setSearchValue('');
    }
    const handleSearchCall = () => {
        props.search(searchValue);
        resetInput();
    }

    return(
        <div>
            <input onChange={handleSearchInput} value={searchValue} type="text"/>
            <input type="button" onClick={handleSearchCall} value="SEARCH" />
        </div>
    )
}

export default SearchComponent;