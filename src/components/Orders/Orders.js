import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const { products, savedCart } = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveItem = id => {
        const restItems = cart.filter(product => product.id !== id);
        setCart(restItems);
        removeFromDb(id)
    }

    const handleDelete = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem handleRemoveItem={handleRemoveItem} product={product} key={product.id}></ReviewItem>)
                }
                {
                    cart.length === 0 && <h1>No Items Found, Please <Link to='/'>Shop Now</Link></h1>
                }
            </div>
            <div className='cart-container'>
                <Cart handleDelete={handleDelete} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;