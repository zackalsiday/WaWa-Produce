import React from 'react'
import { Router, Switch, Link, BrowserRouter, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import Cart from '../cart'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import {addToCart} from '../../reducers/cartSlice'
import usersReducer from '../../reducers/users_reducer';
import { useSelector } from "react-redux";
import configureStore from '../../store/store'
// import offical from '../../images/offical.png'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const history = useHistory()
// const state = configureStore().getState()
// const { cartTotalQuantity } = useSelector(state => state.entities.carts);

class Public extends React.Component{
  
    constructor(props){
        super(props)
        //  const state = configureStore().getState()
        // const { cartTotalQuantity } = useSelector((state) => state.cart);
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }
     componentDidMount(){
    //    console.log(this.props)
        this.props.fetchProducts()
       
    }
     
    
    //  quantityChoice(limit){
    //     let Options = []
    //     for (let i = 1; i < limit; i+= 1){
    //         Options.push(i)
    //     }
    //     return (
    //         <Dropdown
    //             placeholder='Select'
    //             fluid
    //             selection
    //             options={Options}
    //         />
    //     )
    // }
    
    async listOfOption(limit){
        let Options = []
            for (let i = 1; i < limit; i += 1) {
                Options.push(i)
            }
            return Options
    }

    handleAddToCart = (product) => {
       
         dispatch(addToCart(product))
        this.props.history.push("/cart")
        
    }
       
        //  history.push("/cart")
        // console.log(product)
    

  
    listProducts(){
        let list = Object.values(this.props.products)
        return (
            <div className='products'>
                {list.map((item) => (
                    <div className='product'>
                        <h3>{item.name}</h3>
                        <img src={item.image} height='150px' width='150px' />
                        <div className='details'>
                            <span>{item.description}</span>
                            <span className="price">${item.price}</span>
                        </div>
                        <div>{item.quantity} in Stock</div>
                        <button onClick={() => this.handleAddToCart(item)}>Add To Cart</button>
                        {/* <img src={item.image} height='150px' width='150px' />
                        <h4>{item.name}</h4>
                        <h4>${item.price}</h4>
                        <h4>{item.description}</h4>
                        <h4>{item.quantity} in stock</h4> */}
                    </div>

))}

            </div>
        )
    }

   
       
    

 

    render(){
     
        return (
            
           <div className='public-container'>
                <div className='header'>
                       
                    <Link to="/" className="header-link">
                    <img className='offical-logo' src='/offical.png'/>
                    </Link>
                    <Link to='/cart'>
                        <div className='nav-bag'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                            </svg>
                            <span className='bag-quantity'>
                                <span>
                                    {this.props.state}
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
                <nav className='nav-bar'>
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                    <Link>
                    <h3>About</h3>
                    </Link>
                    <Link>
                    <h3>Contact</h3>
                    </Link>
                   
                </nav>
            <div>
                {/* <h2>New Arrivals</h2> */}
                {this.listProducts()}
            </div>
                <div className='about'>
                    <h2>WaWa Produce Mission</h2>
                    <h3>
                        Are you a person that loves deals? Do you care about your customer
                         experience? Do you want to establish and maintain a loyal customer base? 
                    </h3>
                    <h3>
                        If you answered Yes, to any of these questions, then WaWa Produce is your solution and partner! At WaWa Produce our mission is to relieve you from the headaches of finding the greatest deals in the market. We take away the stress, haggling, and uncertainty of finding Produce deals. 
                        With a simple tap of a button, the greatest deals will be delivered to your door with NO extra charge!
                    </h3>
                </div>
            </div>
            
        )
    }
}

export default Public

