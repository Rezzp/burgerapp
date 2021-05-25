import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCart.module.css';

import { GlobalContext } from '../../store/GlobalContext';

const HeaderCartButton = (props) => {

    const cartContext = useContext(GlobalContext);
    const itemincart = cartContext.items.reduce((curNumber, item, curindex) => {
        return (
            curNumber + curindex
        )
    }, 0);

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>  <CartIcon /> </span>
            <span> Cart </span>
            <span className={styles.badge}> {itemincart} </span>
        </button>
    );
};

export default HeaderCartButton;