import React from 'react';
import Span from '../Texts/Span';
import Title from '../Texts/Title';
import ImageWFigcaptionList from '../Image/ImageWFigcaptionList';

//Styles
import '../../sass/sections.scss';
import '../../sass/_boxModel.scss';
import '../../sass/_colors.scss';
import '../../sass/_sizes.scss';

const BenefitSection = (props) => {
    //Estilos
    return(
        <section id='benefits' className='benefits h-50v column'>
            <Title text={
                <div className='m-2'>
                    <Span text='Entre los beneficios que tenemos se encuentran' 
                        fontWeight='lighter'
                        fontSize={ 18 }/>
                    <Span text=';)'
                        fontWeight='lighter'
                        className='light_blue' 
                        fontSize={ 18 }/>  
                </div>
            }/>
            <ImageWFigcaptionList />
        </section>
    );
};

export default BenefitSection;