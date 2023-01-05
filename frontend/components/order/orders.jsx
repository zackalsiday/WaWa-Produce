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
            </div>
        )
    }
}


export default Order