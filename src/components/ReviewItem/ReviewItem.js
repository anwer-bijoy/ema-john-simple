import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, img, price, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="image_" />
            </div>
            <div className='review-items-details'>
                <div className='item-details'>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ReviewItem;