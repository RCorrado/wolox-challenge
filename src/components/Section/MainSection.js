import React, { useEffect, useState } from 'react';
import Span from '../Texts/Span';
import Title from '../Texts/Title';
import Image from '../Image/Image';

//Functions
import { getWidth } from '../../functions/Dimensions';

//Styles
import '../../sass/sections.scss';
import '../../sass/_sizes.scss';
import '../../sass/_colors.scss';
import '../../sass/_boxModel.scss';

const MainSection = (props) => {
    //State
    const[width, setWidth] = useState();
    const[image, setImage] = useState();

    //Handlers
    const handleResource = async (img_resource, callback) => { 
        callback((await import(`../../assets/Img Hero/Ic_ilustra_Hero${img_resource}.png`)).default);
    };

    //Effect al renderizar
    useEffect(() => {
        getWidth(setWidth);
    }, []);

    //Effect al cambiar el width
    useEffect(() => {
        let img_resource = width > 768 ? '@3x' : width > 500 ? '@2x' : '';
        handleResource(img_resource, setImage);
    }, [width]);

    //Effect
    return(
        <section id='main' className='main'>
            <Title text={ 
                <div>
                    <Span text='Bienvenido a tu'
                        fontWeight='lighter'
                        display='block' />
                    <Span text='Entrevista técnica'
                        fontWeight='bold' />
                    <Span text='en' fontWeight='lighter'/>
                    <Span text='Wolox'
                        fontWeight='bold'
                        className='green'
                        display='block' />
                </div>
            }/>
            <Image src={ image }
                text='Main Image' 
                className={ width > 768 ? 'w-30' : width > 500 ? 'w-70' : 'w-90' }/>
        </section>
    );
};

export default MainSection;