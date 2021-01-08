import React, { useEffect, useState } from 'react';
import Span from '../Texts/Span';
import ImageWFigcaption from './ImageWFigcaption';
import { ImagesForBenefits } from '../../variables/ImageListBenefits';

//Functions
import { getWidth } from '../../functions/Dimensions';

//Styles
import '../../sass/_boxModel.scss';
import '../../sass/_sizes.scss';

const ImageWFigcaptionList = (props) => {
    //State
    const[width, setWidth] = useState();
    const[styling, setStyles] = useState();

    //Effect al renderizar
    useEffect(() => {
        getWidth(setWidth);
    }, []);

    //Effect al actualizar width
    useEffect(() => {
        let styles = width < 768 ? 'column' : '';
        setStyles(styles);
    }, [width]);

    return (
        <div className={ `flex justify-around w-80 p-em4-bottom box-shadow ${styling}` }>
            {   ImagesForBenefits.map(image => {
                    return (
                        <ImageWFigcaption src={ image.resource } text={ image.text }
                            aboveText={
                                <div>
                                    {   image.supportText.length > 0 
                                            ?   image.supportText.map(array_text => {
                                                    return  <Span text={ array_text } 
                                                                fontWeight='bold'
                                                                fontSize={ 15 }
                                                                align='center'
                                                                display='block' />
                                                })
                                            :   null    }
                                </div>
                            }
                            className='m-auto m-2-bottom block'
                        />
                    )
                })  }
        </div>
    )
};

export default ImageWFigcaptionList;