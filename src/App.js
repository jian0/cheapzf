import React from 'react';
import './App.css';
import { HashRouter as Router,Route,Redirect } from 'react-router-dom'
import Home from "./pages/home"
import Index from "./pages/home"
import MapFound from "./pages/mapFound"
import CitySearch from "./pages/CitySearch"

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Home} path="/home"></Route>
        <Route component={Home} path="/" exact>
        <Redirect to="/home"></Redirect>
        </Route>
        <Route  path="/home/index" component={Index}></Route>
        <Route  path="/mapfound" component={MapFound}></Route>
        <Route  path="/citysearch" component={CitySearch}></Route>
      </Router>
    </div>
  );
}

export default App;
