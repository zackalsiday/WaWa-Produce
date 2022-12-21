import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                // toast.info("increased product quantity",{
                //     position: "bottom-left"
                // })
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct)
                // toast.success('🦄 Wow so easy!')
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }

    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer