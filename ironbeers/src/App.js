import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/ListBeers' component={ListBeers} />
        <Route exact path='/SingleBeer' component={SingleBeer} />
        <Route exact path='/RandomBeer' component={RandomBeer} />
        <Route exact path='/NewBeer' component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
