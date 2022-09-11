import React from 'react'
import './AddToCart.css'
import { GiBeachBag } from 'react-icons/gi';
function AddToCart() {
    return (
        <button className='AddToCart'>
            <span className='cartText'>
                <GiBeachBag style={{ marginRight: '10px' }} />
                <span> Add to cart  </span>
            </span>
        </button>
    )
}

export default AddToCart