import React from 'react';
import Span from '../Texts/Span';
import ThirdTitle from '../Texts/ThirdTitle';
import ButtonWithBorder from '../Button/ButtonWithBorder';

//Functions
import { openLink } from '../../functions/Linking';

//Styles
import '../../sass/sections.scss';
import '../../sass/_boxModel.scss';
import '../../sass/_colors.scss';
import '../../sass/_sizes.scss';
import '../../sass/_text.scss';

const MediaSection = (props) => {
    //Estilos
    return(
        <section id='media' className='media background_light_greyblue h-50v'>
            <div className='background flex column h-100 p-em-3 justify-center align-center'>
                <div className='m-2-bottom'>
                    <Span text='350+' 
                        fontWeight='bold' 
                        className='green' 
                        fontSize={ 25 }/>
                    <Span text='Woloxers'
                        fontWeight='bold' 
                        className='light_blue' 
                        fontSize={ 25 }/>
                </div>
                <Span text='@wolox'
                    className='white m-1' 
                    fontWeight='lighter' 
                    display='block'
                />
                <ButtonWithBorder event={ e => openLink('https://twitter.com/Wolox') }
                    width='w-150'
                    content={ <Span text='Síguenos' className='white'/> } />
            </div>
            <ThirdTitle text={
                <div className='center'>
                    <Span text='Trabajamos para' 
                        fontWeight='lighter'
                        display='block' />
                    <Span text='convertir' 
                        fontWeight='bold' 
                        className='light_blue' />
                    <Span text='ideas' 
                        fontWeight='bold' 
                        className='green' />
                    <Span text='en' 
                        fontWeight='lighter' />
                    <Span text='productos' 
                        fontWeight='lighter' 
                        display='block' />
                </div>
            }/>
        </section>
    );
};

export default MediaSection;