import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import productsReducer from "./products_reducer"
import ordersReducer from "./orders_reducer"
const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    order: ordersReducer

});

export default entitiesReducer;