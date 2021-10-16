import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'

const Food = ({ food }) => {
    const { id, name, img, price, description } = food;
    return (
        <div className='single-food'>
            <Link to={`/details/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img className='w-50 mb-2 fw-bold' src={img} alt="" />
                <h6>{name}</h6>
                <small style={{ fontSize: '12px' }}>{description}</small>
                <p className='fw-bold'>${price}</p>
            </Link>
        </div>
    );
};

export default Food;