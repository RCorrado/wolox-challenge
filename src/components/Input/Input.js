import React from 'react';
import Span from '../Texts/Span';

//Styles
import '../../sass/_sizes.scss';

const Input = (props) => {
    return (
        <div className={ props.width ? props.width : 'w-70' }>
            <input className={ 
                    props.error ? 'error error-border w-100' : 'black w-100' 
                }
                type={ props.type }
                placeholder={ props.placeholder }
                name={ props.name }
                min={ props.min }
                max={ props.max }
                maxLength={ props.maxLength }
                onChange={ props.changeEvent }
                value={ props.value }
                required
            />
            {   props.error
                    ?   <Span text={ props.errorText }
                            fontSize={ 9 }
                            fontWeight='bold'
                            align='center'
                            display='block'
                            className='error' />
                    :   null    }
        </div>
    )
};

export default Input;