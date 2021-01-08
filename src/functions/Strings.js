import { RegExpAlpha, RegExpMail, RegExpName, RegExpNumber } from '../variables/RegExp';

const handleInputChanging = (target, regex, cb, cbError) => {
    if(regex.test(target) || target === '') cb(target);
    else cb(null);
    cbError(target === '');
}

export const handleChangeInputTextEvent = (event, cb, cbError) => {
    handleInputChanging(event.target.value, RegExpName, cb, cbError);
};

export const handleChangeInputNumberEvent = (event, cb, cbError) => {
    handleInputChanging(event.target.value, RegExpNumber, cb, cbError);
};

export const handleChangeInputPassEvent = (event, cb, cbError) => {
    handleInputChanging(event.target.value, RegExpAlpha, cb, cbError);
    cbError(event.target.value.length < 6);
};

export const handleChangeInputMailEvent = (target, cbError) => {
    cbError(!RegExpMail.test(target))
    return RegExpMail.test(target);
};