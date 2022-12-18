import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer"
import ordersReducer from "./orders_reducer"
import cartsReducer from './cartSlice'
const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    orders: ordersReducer,
    carts: cartsReducer


});

export default entitiesReducer;