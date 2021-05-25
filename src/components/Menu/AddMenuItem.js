import React, { useContext } from 'react';
import { GlobalContext } from '../../store/GlobalContext';

import styles from './AddMenuItem.module.css';

const AddMenuItem = () => {

    const context = useContext(GlobalContext);
    //console.log(context);

    return (

        <form>
            <input className={styles.qty}
                type="number"
                id="qty"
                min='0'
                max='5'
                maxLength='1'
                defaultValue='0'
            />
            <button className={styles.button}>Add</button>

        </form>


    );
};

export default AddMenuItem;

/* <button className={styles.plus}>+</button>
   <button className={styles.minus}>-</button> <br></br> */