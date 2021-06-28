import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import LoginForm from './components/LoginForm';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={LoginForm}/>
        <Redirect from="/" to="/login" exact />
      </Switch>
    </React.Fragment>
  );
}
 
export default App;