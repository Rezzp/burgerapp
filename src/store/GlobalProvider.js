import React, { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import AppReducer from './AppReducer';


//Provider component
export const GlobalProvider = (props) => {

    const cartContxt = {
        items: [{
            id: 'm1',
            name: 'Raw Oysters',
            image: 'https://cdn.pixabay.com/photo/2015/07/04/18/14/cuisine-831580_1280.jpg',
            quantity: 2,
            price: '35.99'
        },
        {
            id: 'm2',
            name: 'Lobser Rolls',
            image: 'https://cdn.pixabay.com/photo/2015/07/04/18/14/cuisine-831580_1280.jpg',
            quantity: 1,
            price: '32.99'
        },
        {
            id: 'm3',
            name: 'Crab Cakes',
            image: 'https://cdn.pixabay.com/photo/2015/07/04/18/14/cuisine-831580_1280.jpg',
            quantity: 3,
            price: '25.99'
        }],
        amount: 0,
        //addItems: addItemToCartHandler,
        //deleteItems: deleteItemToCartHandler,
        // updateItems: updateItemToCartHandler
    };

    const [state, dispatch] = useReducer(AppReducer, cartContxt);
    //Actions
    const addItemToCartHandler = (item) => {
        // dispatch({
        //     type: 'ADD_CART_ITEM',
        //     payload: item
        //})
    };

    const updateItemToCartHandler = (id) => {
        // dispatch({
        //     type: 'UPDATE_CART_ITEM',
        //     payload: id
        // })
    };

    const deleteItemToCartHandler = (id) => {
        // dispatch({
        //     type: 'DELETE_CART_ITEM',
        //     payload: id
        // })
    };

    return (
        <GlobalContext.Provider value={cartContxt}>
            {props.children}
        </GlobalContext.Provider>
    );

};