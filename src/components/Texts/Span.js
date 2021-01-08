import React from 'react';

const Span = (props) => {
    //Estilos
    let styles={
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        color: props.fontColor,
        display: props.display,
        textAlign: props.align
    };

    return <span style={ styles } className={ props.className }> { props.text }</span>
};

export default Span;