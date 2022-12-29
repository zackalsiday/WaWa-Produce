import React from 'react' 
import { useEffect } from "react";
import { clearCart, getTotals } from '../reducers/cartSlice'
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
const Success = (props) => {
    const cart = useSelector((state) => state.entities.carts)

    useEffect(() => {
             dispatch(clearCart())
    }, []);
    return (
        <div className='success-container'>
            <h2 className='success-header'>Your order has been placed successfully</h2>
            <h3 className='success-header-sms'>You should recieve an SMS confirmation shortly</h3>
            <div className="cart-empty">
                <div className="start-shopping">
                    <Link to='/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            />
                        </svg>
                        <span>Order More</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Success