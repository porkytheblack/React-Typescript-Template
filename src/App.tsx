import React from 'react';
import logo from './logo.svg';
import './App.less';
import Router from './Router';
import {Provider as ReduxProvider} from "react-redux"
import { store } from './Redux/Store';
import { ConfigProvider } from 'antd';


function App() {
  
  return (
      <ReduxProvider store={store} >
        <Router/>
      </ReduxProvider>
  );
}

export default App;