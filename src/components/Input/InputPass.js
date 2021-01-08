import React, { useState, useEffect } from 'react';
import Input from './Input';

//Function
import { handleChangeInputPassEvent } from '../../functions/Strings';

const ErrorLength = 'Debe ingresar una contraseña y la misma debe tener al menos 6 caracteres';
const ErrorEquality = 'Las contraseñas no coinciden';

const InputPass = (props) => {
    //State
    const[value, setValue] = useState('');
    const[error, setError] = useState(false);

    //Effect al actualizar value
    useEffect(() => {
        props.event(value);
    }, [value]);

    return(
        <Input type='password'
            placeholder={ props.placeholder }
            name={ props.name }
            changeEvent={ e => handleChangeInputPassEvent(e, setValue, setError) }
            error={ error || props.errorEquality }
            errorText={ props.errorEquality ? ErrorEquality : error ? ErrorLength : null }
            required={ props.required }
            value={ value } />
    );
};

export default InputPass;