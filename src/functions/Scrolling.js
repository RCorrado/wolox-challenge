export const setScrollWindow = value => window.scrollTo({ top: value, behavior: 'smooth' });

export const getScrollElement = elementDOM => { return elementDOM.getBoundingClientRect(); }; 