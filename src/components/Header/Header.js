import React, { useEffect, useState } from 'react';
import HeaderList from './HeaderList';
import Menu from './HeaderBurgerMenu';

//Functions
import { getWidth } from '../../functions/Dimensions';

//Resources
import logo from '../../assets/logo_full_color.svg';

//Styles
import '../../sass/_sizes.scss';
import '../../sass/header.scss';
import '../../sass/_colors.scss';
import '../../sass/_boxModel.scss';

const Header = (props) => {
    //State
    const [width, setWidth] = useState();
    const [stylingByWidth, setStyle] = useState();
    const [showList, setShowing] = useState(false);

    //Handlers
    const handleShown = () => {
        setShowing(!showList);
        props.blockEvent(!showList);
    };

    //Effect al renderizar
    useEffect(() => {
        getWidth(setWidth);
    }, []);

    //Effect al actualizar width
    useEffect(() => {
        let style = width > 1100 ? 'w-150' : width > 768 ? 'w-20' : width > 500 ? 'w-30' : 'w-40';
        setStyle(style);
        (width >= 768) ? setShowing(true) : setShowing(false);
    }, [width]);

    return(
        <header>
            <nav className={ `p-em5 background_white justify-between` }>
                <img src={ logo } 
                    alt='Logo'
                    className={ stylingByWidth } />
                { width < 768 ? <Menu event={ e => handleShown() }/> : null }
                { showList ? <HeaderList event={ handleShown }/> : null }
            </nav>
        </header>
    );
};

export default Header;