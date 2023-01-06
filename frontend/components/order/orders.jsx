import React from 'react'

class Order extends React.Component{
    constructor(props){
        super(props)
        this.handleAcceptOrder = this.handleAcceptOrder.bind(this);
    }
    componentDidMount() {
        this.props.fetchOrders()
        this.props.fetchProducts()
    }

    handleAcceptOrder(item){
        if (this.props.products[item.productId].quantity > 0){

            this.props.updateOrder({ id: item.id, status: 'accepted' }).then((res) => { this.props.updateProduct({ id: item.productId, quantity: this.props.products[item.productId].quantity - item.quantity }) })
        }
    }

    listProducts() {
        let list = Object.values(this.props.products)
        return (
            <div className='current-products'>
                {list.map((item) => (
                    <form className='product-form'>
                        {/* <h3>{item.name}</h3> */}
                        <label>Product Name</label>
                        <input type="text" value={item.name} onChange={e => this.props.updateProduct({id: item.id, name: e.target.value})}/>
                        {/* <img src={item.image} height='150px' width='150px' /> */}
                        <label>item image</label>
                        <input type="text" value={item.image} onChange={e => this.props.updateProduct({ id: item.id, image: e.target.value })} />
                        {/* <div className='details'>
                            <span>{item.description}</span>
                            <span className="price">${item.price}</span>
                        </div> */}
                        <label>description</label>
                        <input type="text" value={item.description} onChange={e => this.props.updateProduct({ id: item.id, description: e.target.value })} />
                        <label>Price</label>
                        <input type="text" value={item.price} onChange={e => this.props.updateProduct({ id: item.id, price: e.target.value })} />
                        <label>quantity</label>
                        <input type="text" value={item.quantity} onChange={e => this.props.updateProduct({ id: item.id, quantity: e.target.value })} />
                        {/* <div>{item.quantity} in Stock</div> */}
                        {/* <button onClick={() => this.handleAddToCart(item)}>Add To Cart</button> */}
                        {/* <img src={item.image} height='150px' width='150px' />
                        <h4>{item.name}</h4>
                        <h4>${item.price}</h4>
                        <h4>{item.description}</h4>
                        <h4>{item.quantity} in stock</h4> */}
                    </form>

                ))}

            </div>
        )
    }

    listOrders() {
        let list = Object.values(this.props.orders)
        let filterd = list.filter(order => order.status === this.props.location.pathname.replace('/',''))
        // console.log(this.props.products)

        return (
            <ul>
                {filterd.map((item) => (
                <div className='order-item'>
                    {console.log(this.props.products[item.productId].quantity)}
                    <li>
                        <h4>Client: {item.name}</h4>
                        <h4>Email: {item.email}</h4>
                        <h4>Product: {item.productName}</h4>
                        {/* <h4>Product Id: {item.productId}</h4> */}
                        <h4>Quantity: {item.quantity}</h4>
                        <h4>Total: ${item.total}</h4>
                        <h4>{this.props.products[item.productId].quantity} in Stock</h4>
                    </li>
                    {
                        this.props.location.pathname === '/pending' ?

                    <div className='order-options'>
                        <button onClick={() => this.handleAcceptOrder(item)}className='accept-order'>Accept</button>
                        <button onClick={() => this.props.updateOrder({ id: item.id, status: 'declined' })}className='decline-order'>Decline</button>
                    </div> : this.props.location.pathname === '/accepted' ?
                    <div className='order-but-container'>
                        <button className="order-complete-but" onClick={() => this.props.updateOrder({ id: item.id, status: 'completed' })}>Complete</button>
                    </div> : this.props.location.pathname === '/declined' ? 
                    <div className='order-but-container'>
                        <button className='order-clear-but' onClick={() => this.props.deleteOrder(item.id)}>Clear</button>
                    </div> : this.props.location.pathname === '/completed' ?
                    <div className='order-but-container'> 
                        <button className='order-clear-but' onClick={() => this.props.deleteOrder(item.id)}>Clear</button>
                    </div> : ''
                    }
                </div>
                ))}
                <br />
            </ul>
        )
    }


    render() {

        return (

            <div className='orders-list'>
                {this.listOrders()}
                {this.props.location.pathname === '/products' ? this.listProducts(): ''}
            </div>
        )
    }
}


export default Order