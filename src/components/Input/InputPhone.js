import React, { useState, useEffect } from 'react';
import Input from './Input';

//Function
import { handleChangeInputNumberEvent } from '../../functions/Strings';

const InputPhone = (props) => {
    //State
    const[value, setValue] = useState('');
    const[error, setError] = useState(false);

    //Effect al actualizar value
    useEffect(() => {
        props.event(value);
    }, [value]);

    return(
        <Input type='phone'
            placeholder={ props.placeholder }
            name={ props.name }
            maxLength={ 10 }
            changeEvent={ e => handleChangeInputNumberEvent(e, setValue, setError) }
            error={ error }
            errorText='Debe ingresar un teléfono'
            required={ props.required }
            value={ value } />
    );
};

export default InputPhone;