
import * as OrdersApiUtil from "../util/orders_api_util";

export const RECEIVE_ALL_ORDERS = "RECEIVE_ALL_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";


const receiveAllOrders = (orders) => ({
    type: RECEIVE_ALL_ORDERS,
    orders,
});

const receiveOrder = (order) => ({
    type: RECEIVE_ORDER,
    order,
});

const removeOrder = (orderId) => ({
    type: REMOVE_ORDER,
    orderId,
});




export const fetchOrders = () => (dispatch) =>
    OrdersApiUtil.fetchOrders().then((orders) => dispatch(receiveAllOrders(orders)));


export const fetchOrder = (orderId) => (dispatch) =>
    OrdersApiUtil.fetchOrder(orderId).then((order) => dispatch(receiveOrder(order)));


export const createOrder = (order) => (dispatch) =>
    OrdersApiUtil.createOrder(order).then(
        (order) => dispatch(receiveOrder(order)),
    );

export const updateOrder = (order) => (dispatch) =>
    OrdersApiUtil.updateOrder(order).then(
        (order) => dispatch(receiveOrder(order))
    );

export const deleteOrder = (orderId) => (dispatch) =>
    OrdersApiUtil.deleteOrder(orderId).then(
        () => dispatch(removeOrder(orderId))
    );