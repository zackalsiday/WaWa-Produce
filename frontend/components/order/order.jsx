import React from 'react'

class Order extends React.Component{
    constructor(props){
        super(props)


    }
    componentDidMount() {
        this.props.fetchOrders()

    }

    listOrders() {
        let list = Object.values(this.props.orders)
        return (
            <ul>
                {list.map((item) => (
                <div className='order-item'>
                    <li>
                        <h4>Client: {item.name}</h4>
                        <h4>Email: {item.email}</h4>
                        <h4>Product: {item.productName}</h4>
                        {/* <h4>Product Id: {item.productId}</h4> */}
                        <h4>Quantity: {item.quantity}</h4>
                        <h4>Total: ${item.total}</h4>
                    </li>
                    <div className='order-options'>
                        <button className='accept-order'>Accept</button>
                        <button className='decline-order'>Decline</button>
                    </div>
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