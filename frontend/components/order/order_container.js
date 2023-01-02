import {connect} from 'react-redux'
import { fetchOrders, updateOrder, deleteOrder } from '../../actions/order_actions'

import Order from './orders'
const mapStateToProps = (state) => ({
    orders: state.entities.orders
})

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders()),
    updateOrder: (orderId) => dispatch(updateOrder(orderId)),
    deleteOrder: (orderId) => dispatch(deleteOrder(orderId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);