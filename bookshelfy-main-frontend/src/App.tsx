import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarContainer from "./components/navbars/NavbarContainer";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <div>
        <NavbarContainer/>
          <AppRouter/>
      </div>
  );
}

export default App;
