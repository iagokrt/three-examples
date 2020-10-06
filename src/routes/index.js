import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Round from '../examples/round';
import Dark from '../examples/dark';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Round} />
        <Route exact path="/dark" component={Dark} />
      </Switch>
    </BrowserRouter>
  );
}