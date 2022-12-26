import React from 'react'
import configureStore from '../store/store'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { Item } from 'semantic-ui-react';
import { useEffect } from "react";
import { fetchOrder, fetchOrders, createOrder, updateOrder, deleteOrder } from '../actions/order_actions'
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart
} from "../reducers/cartSlice";
const Checkout = () => {
    let state = configureStore().getState()
    const cart = useSelector((state) => state.entities.carts)

        useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const initialState = {
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode:'',
        productName: '',
        productId: '',
        quantity: '',
        price: '',
        total: ''
    }

    const updateState = (place, value) =>{
        initialState[place] = value
        console.log(initialState)
    }

    const handleSubmit = () => {
        const {name, phone, email, productName, productId, quantity, price, total, address, city, state, zipcode} = initialState
        createOrder({name: name, email: email, phone: phone, productName: productName, productId: productId, quantity: quantity, price: price, total: total, address: address + ',' + city + ',' + state +','+zipcode})
    }

    const listProducts = () => {
        return (
            <div className='summary-body'>
               
                {cart.cartItems.length === 0 ? 
                <div>
                    Nothing Here Yet
                </div> 
                : 
                <div >
                    {cart.cartItems.map(cartItem => (
                        <div className='checked-item'>
                            <div className='item-choice'>{cartItem.name} x{cartItem.cartQuantity}</div> 
                            <div className='item-cost'>${cartItem.price * cartItem.cartQuantity}</div>
                        </div>
                    ))}
                    <div className='summary-footer'> 
                        <Link  to='/cart'>
                            <button className='edit-summary'>Edit Items</button>
                        </Link>
                        <div className='summary-total'>
                        Total: ${cart.cartTotalAmount}
                        </div>
                    </div>
              
                </div>
                }
               
            </div>
        )
    }
    return (
        <div className='checkout-page'>
            <div className='card'>
                <form onSubmit={handleSubmit()}>
                    {/* {dispatch(fetchOrders()).then(res => {console.log(res)})} */}
                    <div className='card-header'>
                        <h4>Basic Information</h4>
                    </div>
                    <div className='card-body'>
                        <div className='form-name'>
                            <label>Business Name</label>
                            <input 
                                type="text"
                                name="name"
                                value={initialState[name]}
                                onChange={e => updateState(e.target.name, e.target.value)}
                             />
                        </div>
                        <div className='form-number'>
                            <label>Phone Number</label>
                            <input 
                                type="text" 
                                name='phone' 
                                value={initialState[name]}
                                onChange={e => updateState(e.target.name, e.target.value)}
                            />
                        </div>
                        <div className='form-email'>
                            <label>Email</label>
                            <input
                                type="text" 
                                name='email' 
                                value={initialState[name]}
                                onChange={e => updateState(e.target.name, e.target.value)}
                             />
                        </div>
                        <div className='form-address'>
                            <label>Address</label>
                            <input
                                type="text"
                                name='address'
                                value={initialState[name]}
                                onChange={e => updateState(e.target.name, e.target.value)}
                            />
                        </div>
                        <div className="form-city">
                            <label>City</label>
                            <input 
                                type="text" 
                                name="city"
                                value={initialState[name]}
                                onChange={e => updateState(e.target.name, e.target.value)}
                              />
                        </div>
                        <div className="form-state">
                            <label>State</label>
                            <input
                                type="text"
                                name="state"
                                value={initialState[name]}
                                onChange={e => updateState(e.target.name, e.target.value)} 
                              />
                        </div>
                        <div className="form-zipcode">
                            <label>Zip Code</label>
                            <input
                                type="text"
                                name="zipcode"
                                value={initialState[name]}
                                onChange={e => updateState(e.target.name, e.target.value)} 
                            />
                        </div>
                        <div >
                            <input type="submit"  className="form-button" value='Place Order'/>

                        </div>
                    </div>
                </form>
            </div>
            <div className='checkout-summary'>
                <div className='summary-header'>
                    <h4>Summary</h4>
                </div>
                {listProducts()}
            </div>
        </div>
    )
}

export default Checkout