import React from 'react';
import './Food.css'

const Food = ({ food }) => {
    const { name, img, price, description } = food;
    return (
        <div className='single-food'>
            <img className='w-50 mb-2' src={img} alt="" />
            <h5>{name}</h5>
            <small>{description}</small>
            <p className='fw-bold'>${price}</p>
        </div>
    );
};

export default Food;