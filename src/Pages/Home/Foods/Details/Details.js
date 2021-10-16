import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'


const Details = () => {
    const [foodDetails, setFoodDetails] = useState([])
    const [singleFood, setSigngleFood] = useState({});
    const { foodId } = useParams()

    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setFoodDetails(data))
    }, [])

    useEffect(() => {
        const foundFood = foodDetails.find((food) => food?.id == foodId)
        setSigngleFood(foundFood)
        console.log(foundFood);
    }, [foodDetails])

    return (
        <div className='p-5'>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-6 col-12 text-start details p-3">
                    <h3 className='fw-bold'>{singleFood?.name}</h3>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolor blanditiis nam mollitia ad voluptatem illo ea atque dolores odit impedit, harum culpa corrupti nostrum pariatur, ut rerum molestias.</small></p>
                    <div className='d-flex  align-items-center  '>
                        <h3 className='fw-bold mt-2 me-3'>${singleFood?.price}</h3>
                        <div className='d-flex plus-minus'>
                            <button>-</button>
                            <input className='w-25' value='1' type="text" />
                            <button>+</button>
                        </div>
                    </div>
                    <button className='add mt-2'><i class="fas fa-shopping-cart me-2"></i>Add</button>
                    <div className='mt-5 w-100'>
                        <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active d-flex ">
                                    <img className='w-25 me-2' src={singleFood?.img} class="d-block w-25" alt="..." />
                                    <img className='w-25' src={singleFood?.img} class="d-block w-25" alt="..." />
                                </div>
                                <div class="carousel-item d-flex">
                                    <img className='w-25 me-2' src={singleFood?.img} class="d-block w-25" alt="..." />
                                </div>
                                <div class="carousel-item d-flex">
                                    <img className='w-25 me-2' src={singleFood?.img} class="d-block w-25" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev me-3" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next ms-3" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                </div>
                <div className="col-lg-6 col-12 add">
                    <img className='w-75' src={singleFood?.img} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Details;