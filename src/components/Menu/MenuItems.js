import React from 'react';
import AddMenuItem from './AddMenuItem';
import styles from './MenuItems.module.css';

const MenuItems = (props) => {

    return (
        /* l className={styles.items} key={item.id}>
         <li className={styles.itemname} ><h3 >{item.name}</h3></li>
         <li className={styles.itemprice}>${item.price}</li>
         <li >{item.description}</li>
         <li>
             <AddMenuItem />
 
         </li> */

        <li className={styles.items}>
            <div className={styles.image}>
                <div className={styles.frame}>
                    <img src={props.image} />
                </div>
            </div>
            <div className={styles.menuitems}>
                <div className={styles.container}>
                    <div className={styles.itemname}><h3 >{props.name}</h3></div>
                    <div className={styles.itemprice}><h3 >${props.price}</h3></div>

                    <p>{props.description}</p>
                    <div className={styles.additem}>
                        <AddMenuItem />
                    </div>
                </div>
            </div>
        </li>

    );

};
export default MenuItems;