import React from 'react';
import Span from '../Texts/Span';
import Image from '../Image/Image';
import ButtonWithBorder from '../Button/ButtonWithBorder';

//Styles
import '../../sass/_sizes.scss';
import '../../sass/_boxModel.scss';

const Card = (props) => {
    return(
        <div className='p-em5 box-shadow m-3'>
            {   Object.keys(props.item).map(property => {
                    return  (
                        <div className='flex justify-between'>
                            <Span fontSize={ 12 }
                                fontWeight='normal'
                                text={ `${property}:`} /> 
                            {   property === 'logo' 
                                    ?   <Image src={ props.item[property] }
                                            text='logo' 
                                            className='w-50px'/>
                                    :   <Span fontSize={ 12 }
                                            fontWeight='normal'
                                            text={ `${props.item[property]}`} />    }
                        </div>
                    )
            })  }
            <ButtonWithBorder content={ props.isLiked ? 'No me gusta' : 'Me gusta' }
                width='w-150'
                className='m-auto m-2-top'
                event={ props.event }/>
        </div>
    );
};

export default Card;