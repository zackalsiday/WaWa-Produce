

import * as ProductsApiUtil from "../util/products_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products,
});

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product,
});

const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    productId,
});




export const fetchProducts = () => (dispatch) =>
    ProductsApiUtil.fetchProducts().then((products) => dispatch(receiveAllProducts(products)));


export const fetchProduct = (productId) => (dispatch) =>
    ProductsApiUtil.fetchProduct(productId).then((product) => dispatch(receiveProduct(product)));


export const createProduct = (product) => (dispatch) =>
    ProductsApiUtil.createProduct(product).then(
        (product) => dispatch(receiveProduct(product)),
    );

export const updateProduct = (product) => (dispatch) =>
    ProductsApiUtil.updateProduct(product).then(
        (product) => dispatch(receiveProduct(product))
    );

export const deleteProduct = (productId) => (dispatch) =>
    ProductsApiUtil.deleteProduct(productId).then(
        () => dispatch(removeProduct(productId))
    );