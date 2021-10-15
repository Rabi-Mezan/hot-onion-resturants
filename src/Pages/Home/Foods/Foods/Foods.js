import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';


import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [foods])

    const handleTypeButton = (type) => {
        const foodType = foods.filter(food => food.type === type);
        setFoods(foodType);

    }



    return (

        <div className='mt-5 food-container'>
            <div className='foods-time mb-5'>
                <button onClick={() => handleTypeButton('breakfast')} className='single-btn' >Breakfast</button>
                <button onClick={() => handleTypeButton('launch')} className='single-btn' >launch</button>
                <button onClick={() => handleTypeButton('dinner')} className='single-btn' >Dinner</button>

            </div>
            <div className='food-items mt-5'>
                {
                    foods.slice(0, 6).map(food => <Food
                        // key={food.id}
                        food={food}
                    ></Food>)
                }
            </div>

            <button className='checkout-btn'>Checkout Your Food</button>

        </div>
    );
};

export default Foods;