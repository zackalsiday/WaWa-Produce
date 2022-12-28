import React from 'react' 
import { useEffect } from "react";
import { clearCart, getTotals } from '../reducers/cartSlice'
import { useSelector } from "react-redux";
const Success = (props) => {
    const cart = useSelector((state) => state.entities.carts)

    useEffect(() => {
             dispatch(clearCart())
    }, []);
    return (
        <div>
            {console.log(props)}
            We are in the Success component
        </div>
    )
}

export default Success