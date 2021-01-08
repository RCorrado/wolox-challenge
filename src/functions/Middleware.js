const UrlApi = process.env.REACT_APP_URL_API;

export const register = (name, last_name, country, state, mail, phone, password) => {
    return fetch(`${UrlApi}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            last_name: last_name,
            country: country,
            province: state,
            mail: mail,
            phone: phone,
            password: password
        })
    }).then(res => { return res.json() })
    .catch(error => { return error });
};

export const listTechs = () => {
    return fetch(`${UrlApi}/techs`, { method: 'GET'})
        .then(res => { return res.json() })
        .catch(error => { return error });
};