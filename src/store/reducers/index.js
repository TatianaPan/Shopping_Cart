import Image1 from '../../images/image1.jpeg'
import Image2 from '../../images/image2.jpeg'
import Image3 from '../../images/image3.jpeg'

const initialState = {
    items: [
        {id: 1, title: 'Shoes1', desc: 'Very short description', price: 1020, img: Image1},
        {id: 2, title: 'Shoes2', desc: 'Very short description', price: 1040, img: Image2},
        {id: 3, title: 'Shoes3', desc: 'Very short description', price: 1500, img: Image3},
    ],
    cart: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            
            //let newCart = [...state.cart]
            let newItem = state.items.find(item => item.id === action.item_id)
            console.log(newItem)
            const newState = {...state}
            const newCart = [...state.cart]
            const newArray = newCart.concat(newItem)
            newState.cart = newArray
            newState.total = state.total + newItem.price

            console.log(newState)
            
            return newState;
    
        default:
            return state;
    }
}
export default reducer;
