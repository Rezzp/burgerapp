import React from 'react';
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCart.module.css';

const HeaderCartButton = () => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>  <CartIcon /> </span>
            <span> Cart </span>
            <span className={styles.badge}> 3 </span>
        </button>
    );
};

export default HeaderCartButton;