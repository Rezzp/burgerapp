import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCart.module.css';

import { GlobalContext } from '../../store/GlobalProvider';


const HeaderCartButton = (props) => {

    const { items } = useContext(GlobalContext);

    const qty = items.map((item) => item.quantity);
    //const qty = parseInt(qunty);

    console.log("Qty=" + qty);

    const itemincart = qty.reduce((accu, item) => {
        return (accu = accu + parseInt(item))
    }, 0);


    console.log("Qty Now=" + itemincart);

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>  <CartIcon /> </span>
            <span className={styles.cartname}> Cart </span>
            <span className={styles.badge}> {itemincart} </span>
        </button>
    );
};

export default HeaderCartButton;