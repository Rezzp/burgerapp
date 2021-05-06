import React from 'react';

import headerimage from '../../assets/image1.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {

    return (
        <>
            <header className={styles.header}>
                <h1>Seafoods-To-Go</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={headerimage} alt='Various Food Items' />
            </div>
        </>

    );
};

export default Header;