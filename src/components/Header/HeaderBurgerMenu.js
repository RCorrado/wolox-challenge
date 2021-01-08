import React from 'react';
import MenuItem from './HeaderBurgerMenuItem';

//Styles
import '../../sass/_sizes.scss';
import '../../sass/_boxModel.scss';

const Menu = (props) => {
    return(
        <div className='w-30px h-20px flex column justify-around align-center'
            style={{ alignSelf: 'center' }}
            onClick={ props.event }
        >
            <MenuItem />
            <MenuItem />
            <MenuItem /> 
        </div>
    );
};

export default Menu;