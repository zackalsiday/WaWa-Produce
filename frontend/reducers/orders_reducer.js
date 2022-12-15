import {
    RECEIVE_ALL_ORDERS,
    RECEIVE_ORDER,
    REMOVE_ORDER,
} from "../actions/order_actions";

const OrdersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_ORDERS:
            nextState = action.orders;
            return nextState;
        case RECEIVE_ORDER:
            nextState[action.order.id] = action.order;
            return nextState;
        case REMOVE_ORDER:
            delete nextState[action.orderId];
            return nextState;
        default:
            return state;
    }
};

export default OrdersReducer;