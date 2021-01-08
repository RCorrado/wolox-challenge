import React, { useEffect, useState } from 'react';
import Home from './views/Home';
import Techs from './views/Techs';
import Register from './views/Register';
import { ContextProvider } from './context/Context';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Style
import './sass/app.scss';

function App() {
  //State
  const[token, setToken] = useState();

  //Effect al renderizar
  useEffect(() => {
    let exist_user = localStorage.getItem('token');
    if(exist_user && exist_user !== undefined) setToken(exist_user);
  }, []);

  return (
    <ContextProvider token={ token }>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/register'>
            { token ? <Techs /> : <Register tokenEvent={ setToken }/> }
          </Route>
          <Route path='/list'>
            { token ? <Techs /> : <Register tokenEvent={ setToken }/> }
          </Route>
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
