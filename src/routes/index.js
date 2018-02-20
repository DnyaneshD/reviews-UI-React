import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AddReview from "../components/AddReview/AddReview.js";
import App from "../components/App/App.js";

export default () => (
  <BrowserRouter>
    <div>
      <Link to="/home">Home</Link>
      <Link to="/review/:id">Add Review</Link>
      <Switch>
        <Route path="/home" render={ props => <App {...props} /> }/>
        <Route path="/review/:id" render={ props => <AddReview {...props} /> }/>
      </Switch>
    </div>
  </BrowserRouter>
);
