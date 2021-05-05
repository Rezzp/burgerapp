import React from 'react';

import headerimage from

const Header = props => {

    return (
        <>
            <header>
                <h1>Meals-To-Go</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={headerimage} />
            </div>
        </>

    );
};

export default Header;