import {connect} from 'react-redux'
import { fetchProducts } from '../../actions/product_actions'
import configureStore from '../../store/store'
import Public from './public'
import { useSelector } from 'react-redux'
const mapStateToProps = (state) => ({
    products: state.entities.products,
    state: state.entities.carts.cartTotalQuantity
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Public);