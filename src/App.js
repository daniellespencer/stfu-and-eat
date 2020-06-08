import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import RandomGenerator from "./components/layout/RandomGenerator";
import Recommendation from "./components/layout/Recommendation";
import About from "./components/layout/About";

import RestaurantList from "./components/layout/RestaurantList";

// Auth Components and files
import Landing from "./components/auth/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthState from './components/auth/context/authContext'
import setAuthToken from './components/auth/setAuthToken';

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
    <Router>
      <Fragment>
        <Header />
        <section>
          <Switch>
            <Route exact path='/' component={RandomGenerator} />
            <Route exact path='/recommendation' component={Recommendation} />
            <Route exact path='/restaurant-list' component={RestaurantList} />
            <Route exact path='/about' component={About} />

            {/* Auth Components */}
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            
          </Switch>
        </section>
      </Fragment>
    </Router>
    </AuthState>
  );
};

export default App;
