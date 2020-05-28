import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import RandomGenerator from './components/layout/RandomGenerator';
import Recommendation from './components/layout/Recommendation';
import About from './components/layout/About';

import RestaurantList from './components/layout/RestaurantList';


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
    <Fragment>
      <Header />
      <section>
        <Switch>
          <Route exact path="/" component={ RandomGenerator } />
          <Route exact path="/recommendation" component={ Recommendation } />
          <Route exact path="/restaurant-list" component={ RestaurantList } />
          <Route exact path="/about" component={ About } />
        </Switch>
      </section>
    </Fragment>
    </Router>
  );
}

export default App;
