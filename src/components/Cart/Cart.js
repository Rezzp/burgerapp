import React, { useContext } from 'react';
import { GlobalContext } from '../../store/GlobalProvider';

import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {

    const { items, deleteItemToCartHandler, addItemToCartHandler } = useContext(GlobalContext);

    const hasItems = items.length > 0;
    const amount = items.map((item) => parseFloat(item.price) * parseInt(item.quantity));
    const Total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);


    const addItem = (newitem) => {

        const onadd = {
            id: newitem.id,
            name: newitem.name,
            quantity: 1,
            price: newitem.price
        }

        addItemToCartHandler(onadd);
    };

    const removeItem = (removeitem) => {
        const onremove = {
            id: removeitem.id,
            name: removeitem.name,
            quantity: -1,
            price: removeitem.price
        }

        addItemToCartHandler(onremove);

    }


    const cartItems = (
        <ul className={styles.ulist}>
            {items.map(item => (

                <li className={styles.cartitems} key={item.id}>
                    <div className={styles.orderitem}>
                        <div className={styles.itemdetails}>
                            <h2
                                className={`${styles.inline} ${styles.itemname} ${styles.itemspace}`}>
                                {item.name}
                            </h2>
                            <button
                                className={`${styles.inline} ${styles.minus} ${styles.itemspace}`}
                                onClick={() => removeItem(item)}>
                                -
                            </button>
                            <h3
                                className={`${styles.inline} ${styles.itemspace} ${styles.itemqnty}`}>
                                {item.quantity}
                            </h3>
                            <button
                                className={`${styles.inline} ${styles.plus} ${styles.itemspace}`}
                                onClick={() => addItem(item)}>
                                +
                            </button>
                            <h3
                                className={`${styles.inline}  ${styles.itemspace} ${styles.itemprice}`}>
                                ${(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}
                            </h3>
                            <button
                                className={`${styles.inline}  ${styles.deletebtn}`}
                                onClick={() => deleteItemToCartHandler(item.id)}>
                                X
                            </button>
                        </div>
                        {/* <h3 className={`${styles.inline}  ${styles.itemspace} ${styles.itemtotal}`}>Total</h3>
                        <h3 className={`${styles.inline}  ${styles.itemspace} ${styles.totalamt}`}>${(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}</h3> */}
                    </div>
                </li>
            ))
            }
        </ul >
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
                {hasItems && < button className={styles.button}>Place Order</button>}
            </div>
        </Modal >

    );
};
export default Cart;