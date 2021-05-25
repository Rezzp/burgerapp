export default (state, action) => {
    switch (action.type) {
        /* case 'ADD_CART_ITEM':
             return ({
                 ...state,
                 items: [action.payload, ...state.items]
 
             })
 
         case 'DELETE_CART_ITEM':
             return {
                 ...state,
                 items: state.items.filter(items => items.id !== action.payload)
             }
 
         case 'UPDATE_CART_ITEM':
             return {
                 ...state,
                 items: state.items.find(items => items.id == action.payload)
             } */


        default:
            return state;
    }
}