import React, { useEffect, useState } from 'react';

import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    

    return (
        <div className='shopping-container'>
            <div className="product-container">
                <h2>Products are coming : {products.length}</h2>
            </div>
            <div className="cart-container">
                <h2>Cart Container</h2>
            </div>
        </div>
    );
};

export default Shop;