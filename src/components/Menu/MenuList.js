import React from 'react';
import AddMenuItem from './AddMenuItem';
import MealItems from './MealItems';
import styles from './MenuList.module.css';

const MenuList = () => {

    const menuItem = MealItems.map(item =>
        <ul className={styles.items}>
            <li className={styles.itemname} ><h3 >{item.name}</h3></li>
            <li className={styles.itemprice}>${item.price}</li>
            <li className={styles.itemdescription}>{item.description}</li>
            <li>
                <AddMenuItem />
            </li>
        </ul>);

    return (
        <div className={styles.section}>
            <h1>Menu Items</h1>
            <ul>
                {menuItem}
            </ul>
        </div>
    );
};
export default MenuList;