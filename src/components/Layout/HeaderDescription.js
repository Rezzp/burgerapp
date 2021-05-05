import React from 'react';
import styles from './HeaderDescription.module.css';

const HeaderDescription = () => {
    return (
        <section className={styles.summary}>
            <h1> Delicious Seafood Items Served Fresh And Tasty </h1>
            <p>
                Choose your favorite seafood item  from our broad selection of available daily catch
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </section>

    );

};

export default HeaderDescription;