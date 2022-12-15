import {
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT,
} from "../actions/product_actions";

const ProductsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            nextState = action.products;
            return nextState;
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;
        case REMOVE_PRODUCT:
            delete nextState[action.productId];
            return nextState;
        default:
            return state;
    }
};

export default ProductsReducer;