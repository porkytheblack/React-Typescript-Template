import React from 'react';
import './App.css';
import "./index.css"
import Router from './Router';
import {Provider as ReduxProvider} from "react-redux"
import { store } from './Redux/Store';


function App() {
  
  return (
      <ReduxProvider store={store} >
        <Router/>
      </ReduxProvider>
  );
}

export default App;
