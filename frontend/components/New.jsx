import React from 'react'
import {createProduct} from '../actions/product_actions'
class New extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            quantity: '',
            image: '',
            description: '',
            price: ''
        }
    }
     updateState = (place, value) => {
        
        this.setState({[place]: value})
    }

    handleSubmit(){
        return (

            () => {
                dispatch(createProduct(this.state))
            }
        )
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <h2>Add New Product</h2>
                <form onSubmit={this.handleSubmit()}>
                    <label>Name</label>
                    <input type="text" name='name' value={this.state[name]} onChange={e => this.updateState(e.target.name, e.target.value)} />
                    <label>Quantity</label>
                    <input type="number" name='quantity' value={this.state[name]} onChange={e => this.updateState(e.target.name, e.target.value)} />
                    <label>Description</label>
                    <input type="text" name='description' value={this.state[name]} onChange={e => this.updateState(e.target.name, e.target.value)} />
                    <label>Image</label>
                    <input type="text" name='image' value={this.state[name]} onChange={e => this.updateState(e.target.name, e.target.value)} />
                    <label>Price</label>
                    <input type="number" name='price' value={this.state[name]} onChange={e => this.updateState(e.target.name, e.target.value)} />
                    <br />
                    <input type="submit" value="Add Product"/>
                </form>
            </div>
        )
    }
}

export default New 