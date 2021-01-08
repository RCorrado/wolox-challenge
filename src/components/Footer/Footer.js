import React, { useEffect, useState } from 'react';
import Span from '../Texts/Span';
import Title from '../Texts/Title';
import Image from '../Image/Image';
import ButtonWithBorder from '../Button/ButtonWithBorder';

//Functions
import { openLink } from '../../functions/Linking';

//Resources
import logo from '../../assets/Ic_Wolox_Footer.svg';

//Styles
import '../../sass/_sizes.scss';
import '../../sass/footer.scss';
import '../../sass/_colors.scss';
import '../../sass/_boxModel.scss';

const Footer = (props) => {
    return(
        <footer id='footer' 
            className='footer h-50v p-em3-top p-em3-bottom flex column align-center justify-between'
        >
            <div className='flex column align-center'>
                <Title text={
                        <div>
                            <Span text='Gracias por' 
                                fontWeight='bold'
                                fontSize={ 25 }/>
                            <Span text='completar el ejercicio'
                                fontWeight='bold' 
                                className='light_blue' 
                                fontSize={ 25 }/>
                        </div>
                    }
                    styles='m-1-bottom'
                />
                <Span text='Te invitamos a ver más información' 
                    fontWeight='normal'
                    fontSize={ 18 }/>
                <ButtonWithBorder content='Conocer más'
                    width='w-30'
                    className='background_light_blue m-3'
                    event={ e => openLink('https://www.wolox.com.ar') }/>
            </div>
            <Image src={ logo }
                alt='Wolox Footer'/>
        </footer>
    );
};

export default Footer;