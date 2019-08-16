import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
