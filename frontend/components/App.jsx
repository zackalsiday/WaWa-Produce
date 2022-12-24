import React from "react";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.min.css';
import GreetingContainer from "./greeting/greeting_container"
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PublicContainer from './public/public_container'
import {Router, Switch, Link,BrowserRouter, Routes} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import OrderContainer from './order/order_container'
import Cart from './cart'
import Checkout from "./checkout";
const App = () => (
 <div>
    <header>
      {/* <Link to="/" className="header-link">
        <h1>WaWa</h1>
      </Link> */}
      
      <GreetingContainer />
      <ProtectedRoute path='/' component={OrderContainer} />
    </header>
  

      {/* <AuthRoute path="/" component={NavBar}/> */}
    {/* <ToastContainer
                
                /> */}
    <Switch>
      <AuthRoute   exact path="/" component={PublicContainer}/>
      <AuthRoute exact path="/cart" component={Cart}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute  exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/checkout" component={Checkout}/>
    </Switch>
  

  </div>
);
export default App;