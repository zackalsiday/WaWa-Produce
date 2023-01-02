import React from 'react'
import configureStore from '../store/store'
import { useSelector } from "react-redux";
import {Link, useHistory, Redirect} from 'react-router-dom'
import { Item } from 'semantic-ui-react';
import { useEffect } from "react";
import { fetchOrder, fetchOrders, createOrder, updateOrder, deleteOrder } from '../actions/order_actions'
import {clearCart, getTotals} from '../reducers/cartSlice'
import usersReducer from '../reducers/users_reducer';
const Checkout = (props) => {
    let state = configureStore().getState()
    const cart = useSelector((state) => state.entities.carts)

        useEffect(() => {
        dispatch(getTotals());
        
    }, [cart, dispatch]);
    // const history = useHistory()

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
        total: '',
        status: "pending"
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    };
    
    const update = () => {
        initialState[Re] = 'yes'
    }
    
    const updateState = (place, value) =>{
        initialState[place] = value
    }

    const handleSubmit = () => {
        const {name, phone, email, productName, productId, quantity, total, address, city, state, zipcode, status} = initialState
        const form = [name, phone, email, address, city, state, zipcode] 
        if (form.every((x) => x != '')){
                 cart.cartItems.map(cartItem => (
                     dispatch(createOrder({ name: name, email: email, phone: `${phone}`, product_name: cartItem.name, product_id: cartItem.id, status: status, quantity: cartItem.cartQuantity, total: cartItem.cartQuantity * cartItem.price, address: `${address}, ${city}, ${state}, ${zipcode}` } ))
            )).then(props.history.push('/success'))
        }
    
       
       
       
     
    }
    const listProducts = () => {
        return (
            <div className='summary-body'>
               {/* {console.log(props)} */}
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
                        <Link to='/'>
                            <button className='add-item'>Add More Items</button>
                        </Link>
              
                </div>
                }
               
            </div>
        )
    }
    return (
        <div className='checkout-page'>
            <div className='card'>
                {/* {console.log(props)}
                {console.log(initialState)} */}
                {/* {console.log(initialState)} */}
                {/* {props.location.pathname !== '/checkout' ? <Redirect to="/success"/> : ''} */}
                <form >
                    {/* {dispatch(fetchOrders()).then(res => {console.log(res)})} */}
                    <div className='card-header'>
                        <h4>Information</h4>
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
                        
                            {/* <input type="submit"  className="form-button" value='Place Order'/> */}
                            <button onClick={() => handleSubmit()}className='form-button'>Place Order</button>

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