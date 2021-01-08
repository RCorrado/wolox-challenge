import React, { useEffect, useState, useContext } from 'react';
import Linked from '../Link';
import Button from '../Button/Button';
import Context from '../../context/Context';
import ButtonWithBorder from '../Button/ButtonWithBorder';

//Functions
import { getWidth } from '../../functions/Dimensions';
import { getScrollElement, setScrollWindow } from '../../functions/Scrolling';

//Styles
import '../../sass/_boxModel.scss';
import '../../sass/_colors.scss';
import '../../sass/_sizes.scss';


const HeaderList = (props) => {
    //State
    const [width, setWidth] = useState();
    const [styles, setStyle] = useState();

    //Context
    const { token } = useContext(Context);

    //Variables
    let not_border = { border: 'none' };

    //Handlers
    const handleButton = id => {
        let scroll = getScrollElement(document.getElementById(id));
        setScrollWindow(scroll.top);
        props.event();
    };

    //Effect al actualizar width
    useEffect(() => {
        if(width < 768) 
            setStyle('flex column w-80 background_full_white justify-around align-center h-100v box-shadow m-0');
    }, [width])

    //Effect al renderizar
    useEffect(() => {
        getWidth(setWidth);
    }, [])

    return(
        <ul className={ width >= 768 ? 'w-100' : styles }
            style={ width < 768
                ? { position: 'absolute', top: 0, left: 0 } : null }
        >
            <Button content='Inicio' style={ not_border } clicEvent={ e => handleButton('main') }/>
            <Button content='Beneficios' style={ not_border } clicEvent={ e => handleButton('benefits') }/>
            {   !token || token === undefined 
                    ?   <ButtonWithBorder content={ <Linked path='/register' text='Login' /> } 
                            /> 
                    :   null }
        </ul>
    )
};

export default HeaderList;