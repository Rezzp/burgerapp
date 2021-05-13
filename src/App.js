import React from 'react';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Layout/Header';
import HeaderDescription from './components/Layout/HeaderDescription';
import MenuList from './components/Menu/MenuList';


function App() {
  return (
    <>
      <Cart />
      <Header />
      <HeaderDescription />
      <main>
        <MenuList />
      </main>

    </>
  );
}

export default App;
