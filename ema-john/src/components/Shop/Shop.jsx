import React, { useEffect, useState } from 'react';

import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const productCartHandler = (product) => {
        const newCart = [...cart , product];
        setCart(newCart);
    }
    

    return (
        <div className='shopping-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        productCartHandler={productCartHandler}
                    />)
                }
            </div>
            <div className="cart-container">
                <h2>Cart Container</h2>
                <p>Selected Item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;