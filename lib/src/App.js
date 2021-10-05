import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LandingPage from './landing/landing';

function App() {
  // TODO: Set componentDidMount method to check user session -> landing page vs profile page
  return (
    <>
      <Route exact path='/'><LandingPage /></Route>
    </>
  );
}

export default withRouter(App);
