import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputMail from '../components/Input/InputMail';
import InputName from '../components/Input/InputName';
import InputPass from '../components/Input/InputPass';
import Checkbox from '../components/Checkbox/Checkbox';
import InputPhone from '../components/Input/InputPhone';
import ButtonWithBorder from '../components/Button/ButtonWithBorder';

//Functions
import { register } from '../functions/Middleware';
import { getCountries, getStates } from '../variables/DataForConst';

//Styles
import '../sass/_sizes.scss';
import '../sass/_colors.scss';
import '../sass/_boxModel.scss';
import List from '../components/List/List';
import { getWidth } from '../functions/Dimensions';

const Register = (props) => {
    //State
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [width, setWidth] = useState();
    const [phone, setPhone] = useState();
    const [state, setState] = useState();
    const [check, setCheck] = useState([]);
    const [password, setPass] = useState();
    const [states, setStates] = useState();
    const [styling, setStyles] = useState();
    const [country, setCountry] = useState();
    const [error, setError] = useState(false);
    const [lastName, setLastName] = useState();
    const [countries, setCountries] = useState();
    const [confirmPass, setPassAgain] = useState();
    const [allFieldAreValid, setValidity] = useState(true);

    //History
    const history = useHistory();

    //Handlers
    const handleRegister = async () => {
        try {
            let reg = await register(name, lastName, country, state, mail, phone, password);
            localStorage.setItem('token', reg.token);
            props.tokenEvent(reg.token);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    //Effect al renderizar
    useEffect(() => {
        setCountries(getCountries());
        getWidth(setWidth);
    }, []);

    //Effect al actualizar width
    useEffect(() => {
        let w = width < 500 ? 'w-80' : width < 768 ? 'w-60' : 'w-40';
        setStyles(w);
    }, [width]);

    //Effect al actualizar country
    useEffect(() => {
        setStates(getStates(country));
    }, [country]);

    //Effect al actualizar passwords
    useEffect(() => {
        setError((password !== confirmPass))
    }, [password, confirmPass]);

    //Effect al validar cada valor
    useEffect(() => {
        if (
            name && name !== undefined &&
            lastName && lastName !== undefined &&
            password && password !== undefined && !error &&
            mail && mail !== undefined &&
            phone && phone !== undefined &&
            country && country !== undefined &&
            state && state !== undefined && check.length > 0
        )
            setValidity(false);
        else 
            setValidity(true);
    }, [name, password, error, mail, phone, country, state, check]);

    return(
        <div className='flex h-100v w-100 background_light_blue justify-center align-center'>
            <div style={{ borderRadius: '50px' }}
                className={ 
                    `flex column justify-around align-center background_full_white 
                    h-50v p-em5-top p-em5-bottom box-shadow ${styling}`
                }
            >
                <InputName placeholder='Ingrese su nombre'
                    event={ setName }
                    name='name' />
                <InputName placeholder='Ingrese su apellido'
                    event={ setLastName }
                    name='lastname' />
                <InputMail placeholder='Ingrese su correo'
                    event={ setMail }
                    name='mail' />
                <InputPhone placeholder='Ingrese su teléfono'
                    event={ setPhone }
                    name='phone' />
                <InputPass placeholder='Ingrese su contraseña'
                    event={ setPass }
                    name='pass' />
                <InputPass placeholder='Ingrese su contraseña nuevamente'
                    event={ setPassAgain }
                    errorEquality={ error }
                    name='confirmPass' />
                <List textDefault='Seleccione un país'
                    event={ setCountry }
                    list={ countries }/>
                <List textDefault='Seleccione una provincia'
                    event={ setState }
                    list={ states }/>
                <Checkbox text='Acepto términos y condiciones'
                    event={ setCheck } />
                <ButtonWithBorder content='Registrar'
                    event={ e => handleRegister() }
                    disabled={ allFieldAreValid }/>
            </div>
        </div>
    )
};

export default Register;