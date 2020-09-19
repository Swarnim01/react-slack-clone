import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn, Slack } from './Components';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
