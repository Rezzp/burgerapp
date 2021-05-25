import React, { useContext } from 'react';
import { GlobalContext } from '../../store/GlobalContext';

import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {

    const { items } = useContext(GlobalContext);

    const amount = items.map((item) => parseFloat(item.price));
    console.log("amount:" + amount);
    const Total = amount.reduce((acc, item) => (acc += item));
    console.log(Total);

    const cartItems = (
        <ul className={styles.ulist}>

            {items.map(item => (
                <li className={styles.cartitems}>
                    <div className={styles.orderitem}>
                        <div className={styles.itemdetails}>
                            <h2 className={`${styles.inline} ${styles.itemname} ${styles.itemspace}`}>{item.name}</h2>
                            <p className={`${styles.inline} ${styles.itemqty} ${styles.itemspace}`}>Qty</p>
                            <h3 className={`${styles.inline} ${styles.itemspace} ${styles.itemqnty}`}>{item.quantity}</h3>
                            <h3 className={`${styles.inline}  ${styles.itemspace} ${styles.itemprice}`}>${item.price}</h3>
                            <button className={`${styles.inline} ${styles.itemspace} ${styles.deletebtn}`}>X</button>
                        </div>
                        <h3 className={`${styles.inline}  ${styles.itemspace} ${styles.itemtotal}`}>Total</h3>
                        <h3 className={`${styles.inline}  ${styles.itemspace} ${styles.totalamt}`}>${parseFloat(item.price) * parseInt(item.quantity)}</h3>
                    </div>
                </li>
            ))}
        </ul>
    );


    return (
        <Modal onClick={props.onCloseCart}>
            <h2 className={styles.titles}>Shopping Cart</h2>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${Total}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.buttonalt} onClick={props.onCloseCart}>Close</button>
                <button className={styles.button}>Place Order</button>
            </div>
        </Modal>

    );
};
export default Cart;