import React from 'react';
import AddMenuItem from './AddMenuItem';
import styles from './MenuItems.module.css';

const MenuItems = (props) => {
    //console.log("key" + props.id);

    return (

        <li className={styles.items}>
            <div className={styles.image}>
                <div className={styles.frame}>
                    <img src={props.image} alt="Food Items" />
                </div>
            </div>
            <div className={styles.menuitems}>
                <div className={styles.container}>
                    <div className={styles.itemname}><h3>{props.name}</h3></div>
                    <div className={styles.itemprice}><h3 >${props.price}</h3></div>

                    <p>{props.description}</p>
                    <AddMenuItem id={props.id} itemname={props.name} price={props.price} />
                    {/* <div className={styles.additem}>
                        <AddMenuItem id={props.id} itemname={props.name} price={props.price} />
                    </div> */}
                </div>
            </div>
        </li>

    );

};
export default MenuItems;