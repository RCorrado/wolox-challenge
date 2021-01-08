import React from 'react';

const Image = (props) => {
    return  <img src={ props.src }
                alt={ props.text }
                style={ props.styles }
                className={ props.className } />
};

export default Image;