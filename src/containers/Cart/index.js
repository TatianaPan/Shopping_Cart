import React, { Component } from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
    render() {
        return (
            <div>
                <p>You ordered:</p>
                <table className='striped'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(item => {
                            return (
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })

                        }
                        <tr>
                            <td>Total:</td>
                            <td>{this.props.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        cart: state.cart,
        total: state.total
    }
}

export default connect(mapStateToProps)(Cart); 
