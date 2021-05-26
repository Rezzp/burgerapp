export default (state, action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            const existingCartItemIndex = state.items.findIndex(
                (item) => (item.id === action.payload.id)
            );

            //console.log("payload" + action.payload.id + "and qty" + action.payload.quantity);

            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItem;
            let updatedItems;

            if (action.payload.quantity !== 0) {

                if (existingCartItem) {

                    const qty = parseInt(existingCartItem.quantity) + parseInt(action.payload.quantity);

                    if (qty > 0 && qty < 6) {
                        updatedItem = {
                            ...existingCartItem,
                            quantity: qty
                        };
                        updatedItems = [...state.items];
                        updatedItems[existingCartItemIndex] = updatedItem;
                    }
                    else if (qty > 5) {
                        updatedItem = {
                            ...existingCartItem,
                            quantity: 5
                        };
                        updatedItems = [...state.items];
                        updatedItems[existingCartItemIndex] = updatedItem;
                    }
                    else if (qty < 1 || qty == 0) {
                        return {
                            ...state,
                            items: state.items.filter(items => items.id !== action.payload.id)
                        };

                    }
                }
                else {
                    updatedItem = { ...action.payload };
                    updatedItems = state.items.concat(updatedItem);
                }
                return ({
                    items: updatedItems
                });
            };
        // case 'UPDATE_CART_ITEM':
        //     return {
        //         ...state,
        //         items: state.items.quantity = parseInt(items.quantity) + parseInt(action.payload.quantity)
        //     };

        case 'DELETE_CART_ITEM':
            return {
                ...state,
                items: state.items.filter(items => items.id !== action.payload)
            };

        default:
            return state;
    }
}