import React from 'react';
import { Router, Switch, Link, BrowserRouter, Routes } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/route_util'
import AdminNav from '../adminNav';
import OrderContainer from '../order/order_container'
import New from '../New'
const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link> */}
        </nav>
    );
    const personalGreeting = () => (
        <div className="admin-header">
            <h2>WaWa Administration Page</h2>
            <Link to='/newproduct'>
                <button>Add New Product</button>
            </Link>
            <button className="logout-but" onClick={logout}>Log Out</button>
        </div>
    );

    return (
        <div className='admin-page'>
            {currentUser ? personalGreeting() : sessionLinks()}
             <AdminNav/>
             <Switch>
                <ProtectedRoute path="/pending" component={OrderContainer}/>
                <ProtectedRoute path="/accepted" component={OrderContainer} />
                <ProtectedRoute path="/declined" component={OrderContainer} />
                <ProtectedRoute path="/completed" component={OrderContainer} />
                <ProtectedRoute path="/products" component={OrderContainer} />
                <ProtectedRoute path="/newproduct" component={New} />
             </Switch>
        </div>
        
        )
};


export default Greeting;
