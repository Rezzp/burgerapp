import React from 'react';
import styles from './AddMenuItem.module.css';

const AddMenuItem = () => {

    return (
        <form>
            <button className={styles.button}>Add</button>
            <input className={styles.qty} type="telephone" id="qty" value='0' />
            <button className={styles.plus}>+</button>
            <button className={styles.minus}>-</button> <br></br>
        </form>
    );
};

export default AddMenuItem;