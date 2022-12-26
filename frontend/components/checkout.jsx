import React from 'react'
import configureStore from '../store/store'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { Item } from 'semantic-ui-react';
import { useEffect } from "react";
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
                {console.log(cart)}
                <div className='card-header'>
                    <h4>Basic Information</h4>
                </div>
                <div className='card-body'>
                    <div className='form-name'>
                        <label>Business Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className='form-number'>
                        <label>Phone Number</label>
                        <input type="text" name='phone' />
                    </div>
                    <div className='form-email'>
                        <label>Email</label>
                        <input type="text" name='email' />
                    </div>
                    <div className='form-address'>
                        <label>Address</label>
                        <input type="text" name='address'  />
                    </div>
                    <div className="form-city">
                        <label>City</label>
                        <input type="text" name="city"  />
                    </div>
                    <div className="form-state">
                        <label>State</label>
                        <input type="text" name="state" />
                    </div>
                    <div className="form-zipcode">
                        <label>Zip Code</label>
                        <input type="text" name="zipcode"  />
                    </div>
                    <div >
                        <button className="form-button" type="button">Place Order</button>
                    </div>
                </div>
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