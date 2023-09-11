import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarContainer from "./components/navbars/NavbarContainer";
import AppRouter from "./components/AppRouter";
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/routes/consts";

type AppProps = {
    isAuth: boolean
}

function App() {
    const location = useLocation()

  return (
      <div>
          {location.pathname === LOGIN_ROUTE || location.pathname === REGISTRATION_ROUTE ?
              <AppRouter/>
              :
              <>
                  <NavbarContainer/>
                  <AppRouter/>
              </>
          }

      </div>
  );
}

export default App;
