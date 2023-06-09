import React, { useEffect, useState } from 'react';

import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
      const storedCart = getShoppingCart();
      const savedCart = [];
      for(const id in storedCart) {
        const addedProducts = products.find(product => 
            product.id === id
        )

        if(addedProducts) {
            const quantity = storedCart[id]
            addedProducts.quantity = quantity
            savedCart.push(addedProducts)
        }
      }
      setCart(savedCart)
    }, [products])
    

    const productCartHandler = (product) => {
        const newCart = [...cart , product];
        setCart(newCart);
        addToDb(product.id);
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
                <Cart 
                    cart={cart}
                />
            </div>
        </div>
    );
};

export default Shop;