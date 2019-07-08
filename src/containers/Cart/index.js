import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../index.css'

class Cart extends Component {

    handleDeleteItem = (id) => {
        console.log(id)
        const action = {
            type: 'DELETE_ITEM',
            item_id: id
        }
        return this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <p>You ordered:</p>
                <table className='striped'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(item => {
                            return (
                                <tr key={item.item.id}>
                                    <td>{item.item.title}</td>
                                    <td>CHF {item.item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><a className="waves-effect waves-light btn-small" onClick={ () => this.handleDeleteItem(item.item.id) }>Delete item</a></td>
                                </tr>
                            )
                        })

                        }
                        <tr>
                            <td className='total'>Total:</td>
                            <td></td>
                            <td>{this.props.totalQuantity}</td>
                            <td>CHF {this.props.total}</td>
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
        total: state.total,
        totalQuantity: state.totalQuantity
    }
}

export default connect(mapStateToProps)(Cart); 
