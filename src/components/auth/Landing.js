import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Landing extends Component {
  render() {
    return (
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>STFU & EAT</h1>
            <p className='lead'>
              Want to make your own decision? Login or create a profile to see our full list
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-success landing-button'>
                Register
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
