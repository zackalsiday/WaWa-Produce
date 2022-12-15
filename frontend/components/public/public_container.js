import {connect} from 'react-redux'
import { fetchProducts } from '../../actions/product_actions'
import Public from './public'
const mapStateToProps = (state) => ({
    products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Public);