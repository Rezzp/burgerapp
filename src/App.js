import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import HeaderDescription from './components/Layout/HeaderDescription';
import MenuList from './components/Menu/MenuList';
import styles from './AppStyles.module.css';
import { GlobalProvider } from './store/GlobalProvider';



function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };


  return (
    <GlobalProvider>
      { showCart && <Cart onCloseCart={showCartHandler} />}
      <Header onClose={showCartHandler} />
      <HeaderDescription />
      <main className={styles.main}>
        <MenuList />
      </main>
    </GlobalProvider>
  );
}

export default App;
