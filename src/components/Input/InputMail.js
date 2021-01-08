import React, { useEffect, useState } from 'react';
import Input from './Input';

//Functions
import { handleChangeInputMailEvent } from '../../functions/Strings';

const InputMail = (props) => {
    //State
    const[value, setValue] = useState('');
    const[error, setError] = useState(false);

    //Handlers
    const handleInput = e => {
        setValue(e.target.value);
    };

    //Effect al actualizar value
    useEffect(() => {
        let valid_mail = handleChangeInputMailEvent(value, setError);
        props.event(valid_mail ? value : null);
    }, [value]);

    return(
        <Input type='email'
            placeholder={ props.placeholder }
            name={ props.name }
            changeEvent={ e => handleInput(e) }
            required={ props.required }
            error={ error }
            errorText='El mail ingresado no cumple con el formato requerido: ejemplo@ejemplo.com'
            value={ value } />
    );
};

export default InputMail;