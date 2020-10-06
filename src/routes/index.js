import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Round from '../examples/round';
import Dark from '../examples/dark';
import Spin from '../examples/spin';
import Trac from '../examples/trac';
import TracTwo from '../examples/tractwo';
import Lockcam from '../examples/lockcam';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Round} />
        <Route exact path="/dark" component={Dark} />
        <Route exact path="/spin" component={Spin} />
        <Route exact path="/trac" component={Trac} />
        <Route exact path="/tractwo" component={TracTwo} />
        <Route exact path="/lockcam" component={Lockcam} />
      </Switch>
    </BrowserRouter>
  );
}