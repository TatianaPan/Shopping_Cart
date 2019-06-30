import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../../index.css'

 class ShopList extends Component {

    handleAddItem = (id) => {
        const action = {
            type: 'ADD_ITEM',
            item_id: id
        }
        
        //const itemIndex = this.props.items.findIndex(item => item.id === id)
        
        return this.props.dispatch(action);
    }


    render() {
        return (
            <div className='list'>
                { this.props.items.map(item => {
                return (
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt='shoes'/>
                            {/* <span className="card-title">{item.title}</span> */}
                        </div>

                        <div className="card-content">
                            <p className='card-title'>{item.title}</p>
                            <p>{item.desc}</p>
                            <p>Price: CHF {item.price}.-</p>
                            <a className="button btn-floating btn-large waves-effect waves-light red" onClick={ () => this.handleAddItem(item.id) }><i className="material-icons">add</i></a>
                        </div>
                    </div>
                    // <div class="card-action">
                        
                    // </div>
                    )
                })
            }
           </div> 
        )
    }
}

const mapStateToProps = state => {
    
    return {
        items: state.items
    }
}
export default connect(mapStateToProps)(ShopList);
