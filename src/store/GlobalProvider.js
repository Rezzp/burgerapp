import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Inital State

const initialState = {
    items: [
        // {
        // id: 'm1',
        // name: 'Raw Oysters',
        // quantity: 1,
        // price: '35.99'
        //  }
    ]
    //amount: 0
    // addItems: (item) => { },
    // deleteItems: (id) => { },
    // updateItems: (id) => { },
    //addItems: addItemToCartHandler,
    //deleteItems: deleteItemToCartHandler,
    // updateItems: updateItemToCartHandler
};

//Create context
export const GlobalContext = createContext(initialState);


//Provider component
export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    const addItemToCartHandler = (item) => {
        console.log("Items ===" + item.quantity);
        dispatch({
            type: 'ADD_CART_ITEM',
            payload: item
        })

    };

    const updateItemToCartHandler = (id) => {
        // dispatch({
        //     type: 'UPDATE_CART_ITEM',
        //     payload: id
        // })
    };

    const deleteItemToCartHandler = (id) => {
        dispatch({
            type: 'DELETE_CART_ITEM',
            payload: id
        })
    };

    return (
        <GlobalContext.Provider value={{ items: state.items, addItemToCartHandler, deleteItemToCartHandler }}>
            {props.children}
        </GlobalContext.Provider>
    );

};