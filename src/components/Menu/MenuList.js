import React from 'react';
import MealItems from './MealItems';
import MenuCard from '../UI/MenuCard';
import styles from './MenuList.module.css';
import MenuItems from './MenuItems';

const MenuList = () => {

    /*const menuItem = MealItems.map(item =>
        < ul className={styles.items} key={item.id}>
            <li className={styles.itemname} ><h3 >{item.name}</h3></li>
            <li className={styles.itemprice}>${item.price}</li>
            <li >{item.description}</li>
            <li>
                <AddMenuItem />

            </li>
        </ul >
    );*/

    const menuItem = MealItems.map(item => <MenuItems
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        description={item.description}
        price={item.price} />);

    return (

        <MenuCard>
            <h1 className={styles.menu}>Menu Items</h1>
            <ul>
                {menuItem}
            </ul>
        </MenuCard>
    );
};
export default MenuList;