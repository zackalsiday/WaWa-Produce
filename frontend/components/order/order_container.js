import {connect} from 'react-redux'
import { fetchOrders } from '../../actions/order_actions'
import Order from './order'
const mapStateToProps = (state) => ({
    orders: state.entities.orders
})

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);