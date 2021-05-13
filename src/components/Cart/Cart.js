import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {

    const cartItems = (
        <ul className={styles.cartitems}>
            {[{ id: 'c1', name: 'Crab Cake', quantity: 2, price: 32.99 }].map((item) => (<li>{item.name}</li>))}
        </ul>
    )

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>32.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.buttonalt}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>

    );
};
export default Cart;