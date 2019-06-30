import Image1 from '../../images/image1.jpeg'
import Image2 from '../../images/image2.jpeg'
import Image3 from '../../images/image3.jpeg'

const initialState = {
    items: [
        {id: 1, title: 'HANGISI BRIDE', desc: 'White satin almond toe pumps featuring a blue Swarovski crystal buckle and a stiletto high heel.', price: 1020, img: Image1},
        {id: 2, title: 'HANGISI', desc: 'Royal satin evening pump with a grey crystal embellished ornament from Manolo Blahnik.', price: 1040, img: Image2},
        {id: 3, title: 'HANGISI', desc: 'Pumps von Manolo Blahnik. Spitze Kappe, Verzierung aus verschiedenen Halbedelsteinen', price: 1500, img: Image3},
    ],
    cart: [],
    total: 0,
    totalQuantity: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            // create copy of the whole state
            const newState = {...state};

            // create a copy of array - state.cart
            const newCart = [...state.cart];

            // create a copy of clicked item
            let newItem = state.items.find(item => item.id === action.item_id);

            // check if such item is already in cart
            let existedItem = state.cart.find(item => newItem.id === item.item.id);
            
            if (existedItem) {
                existedItem.quantity += 1;
                newState.total = state.total + newItem.price;
                newState.totalQuantity += 1;
                return newState;
            }
            else {
                const addedItem = {
                    item: newItem,
                    quantity: 1
                }
                
                const newArray = newCart.concat(addedItem);
                newState.cart = newArray;
                newState.total = state.total + newItem.price;
                newState.totalQuantity += 1;
                return newState;
            }
        }
        case 'DELETE_ITEM':
            {
                const newState = {...state};
                const newCart = [...state.cart];

                // find an index of clicked item in array (cart)
                const itemIndex = newCart.findIndex(item => item.item.id === action.item_id);
                const deletedItem = newCart[itemIndex]

                //check if quantity of item more than 1: then cahnge only quantity and final price
                if (deletedItem.quantity > 1) {
                    deletedItem.quantity -= 1;
                    newState.total = newState.total - deletedItem.item.price;
                    newState.totalQuantity -= 1;
                    return newState;
                } else {
                    newCart.splice(itemIndex, 1);
                    newState.total = newState.total - deletedItem.item.price;
                    newState.cart = newCart;
                    newState.totalQuantity -= 1;
                    return newState;
                }
            }
        default:
            return state;
    }
}
export default reducer;
