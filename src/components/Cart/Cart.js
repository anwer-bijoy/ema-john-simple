import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleDelete }) => {
    const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0)
    const price = cart.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
    const shipping = cart.reduce((prev, curr) => prev + curr.shipping, 0);
    const tax = (price * 0.1).toFixed(2);
    const grandTotal = price + shipping + parseFloat(tax)

    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button onClick={handleDelete}>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;