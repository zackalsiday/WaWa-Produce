import React from "react";
import GreetingContainer from "./greeting/greeting_container"
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PublicContainer from './public/public_container'
import {Route, Switch, Link} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import OrderContainer from './order/order_container'
const App = () => (
 <div>
    <header>
      <Link to="/" className="header-link">
        <h1>WaWa</h1>
      </Link>
      <GreetingContainer />
      <ProtectedRoute path='/' component={OrderContainer} />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      
      <PublicContainer/>
    </Switch>
  </div>
);
export default App;