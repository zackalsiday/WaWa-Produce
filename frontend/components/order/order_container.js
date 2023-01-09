import {connect} from 'react-redux'
import { fetchOrders, updateOrder, deleteOrder } from '../../actions/order_actions'
import {fetchProducts, updateProduct, deleteProduct} from '../../actions/product_actions'
import Order from './orders'
const mapStateToProps = (state) => ({
    orders: state.entities.orders,
    products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders()),
    updateOrder: (orderId) => dispatch(updateOrder(orderId)),
    deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
    fetchProducts: () => dispatch(fetchProducts()),
    updateProduct: (productId) => dispatch(updateProduct(productId)),
    deleteProduct: (productId) => dispatch(deleteProduct(productId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);