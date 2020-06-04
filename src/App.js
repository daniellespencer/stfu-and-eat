import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import RandomGenerator from './components/layout/RandomGenerator';
import Recommendation from './components/layout/Recommendation';
import About from './components/layout/About';

import RestaurantList from './components/layout/RestaurantList';

   // Auth Components and files
   import Landing from './components/auth/Landing';
   import Login from './components/auth/Login';
   import Profile from './components/auth/Profile';
   import Register from './components/auth/Register';


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

           {/* Auth Components */}
          <Route exact path="/landing" component={ Landing } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/profile" component={ Profile } />  
        </Switch>
      </section>
    </Fragment>
    </Router>
  );
}

export default App;
