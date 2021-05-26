import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../store/GlobalProvider';

import styles from './AddMenuItem.module.css';

const AddMenuItem = (props) => {

    const { items, addItemToCartHandler } = useContext(GlobalContext);
    //console.log(context);

    const [qty, setQty] = useState(0);

    const newItem = {
        id: props.id,
        name: props.itemname,
        quantity: qty,
        price: props.price
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addItemToCartHandler(newItem);
    };

    return (
        <form className={styles.formcontrols} onSubmit={onSubmitHandler}>
            <input className={styles.qty}
                type="number"
                id="qty"
                min='0'
                max='5'
                maxLength='1'
                value={qty}
                onChange={(e) => setQty(e.target.value)}
            />
            <button className={styles.button}>Add</button>
        </form>
    );
};

export default AddMenuItem;
