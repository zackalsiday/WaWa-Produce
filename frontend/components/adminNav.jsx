import React from 'react'
import {Link} from 'react-router-dom'
class AdminNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav className='admin-nav-bar'>
                <Link to='/pending'>
                    <h3>Pending</h3>
                </Link>
                <Link to='/accepted'>
                    <h3>Accepted</h3>
                </Link>
                <Link to='/declined'>
                    <h3>Declined</h3>
                </Link>
                <Link to='/completed'>
                    <h3>Completed</h3>
                </Link>
                <Link to='/newproduct'>
                    <h3>New Product</h3>
                </Link>
            </nav>
        )
    }
}

export default AdminNav