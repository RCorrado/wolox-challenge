import React from 'react';
import Image from './Image';

//Styles
import '../../sass/_boxModel.scss';

const ImageWFigcaption = (props) => {
    return(
        <figure className='m-0'>
            <Image src={ props.src } text={ props.text } className={ props.className } />
            <figcaption>{ props.aboveText }</figcaption>
        </figure>
    );
};

export default ImageWFigcaption;