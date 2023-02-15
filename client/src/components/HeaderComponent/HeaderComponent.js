import React from 'react';

const HeaderComponent = (props) => {
    return(
        <div className="Header-container">
            <h2>{props.title}</h2>
        </div>
    )
}

export default HeaderComponent;
