import React, { useEffect, useState } from 'react';
import Input from './Input';

//Function
import { handleChangeInputTextEvent } from '../../functions/Strings';

const InputName = (props) => {
    //State
    const[value, setValue] = useState('');
    const[error, setError] = useState(false);

    //Effect al actualizar el value
    useEffect(() => {
        props.event(value);
    }, [value]);

    return(
        <Input type='text'
            placeholder={ props.placeholder }
            name={ props.name }
            maxLength={ 30 }
            changeEvent={ e => handleChangeInputTextEvent(e, setValue, setError) }
            required={ props.required }
            error={ error }
            errorText='Debe ingresar un nombre'
            value={ value } />
    );
};

export default InputName;