import React, { useEffect, useState } from 'react';
import Button from './Button';

//Functions
import { getWidth } from '../../functions/Dimensions';

//Styles
import '../../sass/button.scss';
import '../../sass/_sizes.scss';
import '../../sass/header.scss';
import '../../sass/_boxModel.scss';

const ButtonWithBorder = (props) => {
    //State
    const[width, setWidth] = useState();
    const[stylingByWidth, setStyle] = useState();

    //Effect al renderizar
    useEffect(() => {
        if(props.width && props.width !== undefined) return false;
        getWidth(setWidth);
    }, []);

    //Effect al actualizar width
    useEffect(() => {
        let style = props.width && props.width !== undefined 
            ? props.width : width > 1100 
                ? 'w-150' : width > 768 
                    ? 'w-20' : width > 500 
                        ? 'w-30' : 'w-40';
        setStyle(style);
    }, [width]);

    return  <Button clicEvent={ props.event }
                disabled={ props.disabled }
                className={ 
                    `p-3-left p-3-right p-2-top p-2-bottom radius border withBorder 
                    ${stylingByWidth}
                    ${props.className}` 
                }
                content={ props.content } />
};

export default ButtonWithBorder;