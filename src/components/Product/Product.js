import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props
    const { id, name, img, price, seller, ratings, } = product;
    return (
        <div className='product'>
            <img src={img} alt="product_image" />
            <div className='product-body'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;