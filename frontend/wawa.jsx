import React from "react";
import ReactDOM from "react-dom";
import {login} from './actions/session_actions'
import { logout } from './actions/session_actions'
import { signup } from './actions/session_actions'
import { fetchProduct, fetchProducts, createProduct, updateProduct, deleteProduct } from './actions/product_actions'
import { fetchOrder, fetchOrders, createOrder, updateOrder, deleteOrder } from './actions/order_actions'
import Root from './components/root'
import {getTotals} from './reducers/cartSlice'
import configureStore from './store/store';
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();

    }
    store.dispatch(getTotals())
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login 
    window.logout = logout 
    window.signup = signup 
    window.fetchProduct = fetchProduct
    window.fetchProducts = fetchProducts
    window.createProduct = createProduct
    window.updateProduct = updateProduct
    window.deleteProduct = deleteProduct

    window.fetchOrder = fetchOrder
    window.fetchOrders = fetchOrders
    window.createOrder = createOrder
    window.updateOrder = updateOrder
    window.deleteOrder = deleteOrder
//   const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});