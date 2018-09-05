import React from 'react';
import classes from './App.scss';
import {BrowserRouter, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';


export const App = () => {
   return (
    <BrowserRouter>
      <div className={classes.App} data-test="component-app">
        <Header data-test="element-header"/>
        <Overview data-test="element-overview"/>
      </div>
      </BrowserRouter>
    );
  }

export default App;
