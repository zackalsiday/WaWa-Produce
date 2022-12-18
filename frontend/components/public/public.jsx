import React from 'react'
import { Router, Switch, Link, BrowserRouter, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import Cart from '../cart'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../reducers/cartSlice'
class Public extends React.Component{
    constructor(props){
        super(props)

        this.handleAddToCart = this.handleAddToCart.bind(this)
    }
     componentDidMount(){
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

    handleAddToCart = (product) => (
         dispatch(addToCart(product))
        // console.log(product)
    )

  
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
                <nav className='nav-bar'>
                    <Link to='/'>
                        <h2>OnlineShop</h2>
                    </Link>
                    <Link to='/cart'>
                        <div className='nav-bag'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                            </svg>
                            <span className='bag-quantity'>
                                <span>
                                    3
                                </span>
                            </span>
                        </div>
                    </Link>
                </nav>
            <div>
                <h2>New Arrivals</h2>
                {this.listProducts()}
            </div>
            </div>
            
        )
    }
}

export default Public