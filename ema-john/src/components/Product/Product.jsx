import React from 'react';

import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const {img , name , price , seller , ratings} = props.product;

    const productCartHandler = props.productCartHandler;

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price : $ {price}</p>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-rating'>Rating : {ratings} Star</p>
            </div>
            <button 
                className='btn-cart'
                onClick={() => productCartHandler(props.product)}
             >Add to Cart
             <FontAwesomeIcon icon={faShoppingCart}/>
             </button>
        </div>
    );
};

export default Product;