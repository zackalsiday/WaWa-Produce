import React from 'react'
import { Router, Switch, Link, BrowserRouter, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Dropdown } from 'semantic-ui-react'
import NavBar from '../navBar';
import Cart from '../cart'
class Public extends React.Component{
    constructor(props){
        super(props)


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
    quantityChoice = () => (
           
       
            <Dropdown
                placeholder='Select'
                fluid
                selection
                options={this.listOfOption()}
            />
     
    )

    listProducts(){
        let list = Object.values(this.props.products)
        return (
            <ul>
                {list.map((item) => (
                    <li>
                        <img src={item.image} height='150px' width='150px' />
                        <h4>{item.name}</h4>
                        <h4>${item.price}</h4>
                        <h4>{item.description}</h4>
                        <h4>{item.quantity} in stock</h4>
                    </li>

))}
            </ul>
        )
    }
 

    render(){
     
        return (
            
           <div>
            {this.listProducts()}
                <nav>
                    <Link to='/'>
                        <h2>OnlineShop</h2>
                    </Link>
                    <Link to='/cart'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                            </svg>
                            <span>
                                <span>
                                    3
                                </span>
                            </span>
                        </div>
                    </Link>
                </nav>
            </div>
            
        )
    }
}

export default Public