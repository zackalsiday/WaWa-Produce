import React from 'react'

class Public extends React.Component{
    constructor(props){
        super(props)


    }
     componentDidMount(){
        this.props.fetchProducts()
     
    }
    
    listProducts(){
        let list = Object.values(this.props.products)
        return (
            <ul>
                {list.map((item) => (
                    <li>
                        <img src={item.image} height='150px' width='150px' />
                        <h4>{item.name}</h4>
                        <h4>${item.price}</h4>
                        <h4>{item.description}</h4>
                    </li>
                ))}
            </ul>
        )
    }
 

    render(){
     
        return (
            
           <div>{this.listProducts()}</div>
        )
    }
}

export default Public