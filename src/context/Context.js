import React from 'react';

const Context = React.createContext({ token: null });

export const ContextProvider = (props) => {
    return (
        <Context.Provider value={{ 
            token: props.token 
        }}>
            { props.children }
        </Context.Provider>
    );
};

export default Context;