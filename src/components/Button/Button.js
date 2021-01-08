import React from 'react';

//Styles
import '../../sass/button.scss';
import '../../sass/_boxModel.scss';

const Button = (props) => {
    return(
        <button className={ `${props.className} button m-1-both` }
            onClick={ props.clicEvent }
            style={ props.style }
            disabled={ props.disabled }
        >
            { props.content }
        </button>
    );
};

export default Button;