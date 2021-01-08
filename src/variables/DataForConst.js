import csc from 'country-state-city';

export const getCountries = () => { return csc.getAllCountries() };

export const getStates = id => { return csc.getStatesOfCountry(id) };