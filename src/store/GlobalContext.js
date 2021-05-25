import { createContext } from 'react';

//Inital State

const initialState = {
    items: [
        {
            id: 'm1',
            name: 'Raw Oysters',
            image: 'https://cdn.pixabay.com/photo/2015/07/04/18/14/cuisine-831580_1280.jpg',
            description: 'Fresh caught Oysters from ocean directly to the table. Served with simple with dipping sauce and lemon wedge',
            price: '35.99'
        },
        {
            id: 'm2',
            name: 'Lobser Rolls',
            image: 'https://cdn.pixabay.com/photo/2015/07/04/18/14/cuisine-831580_1280.jpg',
            description: 'Fresh caught Oysters from ocean directly to the table. Served with simple with dipping sauce and lemon wedge',
            price: '35.99'
        },
        {
            id: 'm3',
            name: 'Crab Cakes',
            image: 'https://cdn.pixabay.com/photo/2015/07/04/18/14/cuisine-831580_1280.jpg',
            description: 'Fresh caught Oysters from ocean directly to the table. Served with simple with dipping sauce and lemon wedge',
            price: '35.99'
        }
    ],
    amount: 0,
    addItems: (item) => { },
    deleteItems: (id) => { },
    updateItems: (id) => { }
}

//Create context
export const GlobalContext = createContext(initialState);