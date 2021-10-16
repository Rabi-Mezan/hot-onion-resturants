import React from 'react';
import './Whyus.css'
import cook1 from '../../../images/Image/adult-blur-blurred-background-687824.png'
import cook2 from '../../../images/Image/chef-cook-food-33614.png'
import cook3 from '../../../images/Image/architecture-building-city-2047397.png'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Whyus = () => {
    return (
        <div className=' whyus mt-5'>
            <div className="title-text text-start">
                <h2>Why you choose us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nam fugiat inventore, enim reprehenderit delectus itaque rem fuga!</p>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-12 single-service">
                    <img className='w-75 mb-2' src={cook1} alt="" />
                    <h6><i class="fas fa-truck"></i> Fast delivery</h6>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos hic odit eos, ab neque tenetur pariatur maxime? Ipsam, quas ullam!</p>
                    <Nav.Link>See More<i class="fas fa-arrow-circle-right ms-2 bg-success"></i></Nav.Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 single-service">
                    <img className='w-75 mb-2' src={cook2} alt="" />
                    <h6><i class="fas fa-bell"></i> A Good Responder</h6>
                    <p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos hic odit eos, ab neque tenetur pariatur maxime? Ipsam, quas ullam!</p>
                    <Nav.Link>See More<i class="fas fa-arrow-circle-right ms-2 bg-success"></i></Nav.Link>
                </div>
                <div className="col-lg-4 col-md-6 col-12 single-service">
                    <img className='w-75 mb-2' src={cook3} alt="" />
                    <h6><i class="fas fa-home"></i>Home delivery</h6>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos hic odit eos, ab neque tenetur pariatur maxime? Ipsam, quas ullam!</p>
                    <Nav.Link>See More<i class="fas fa-arrow-circle-right ms-2 bg-success"></i></Nav.Link>
                </div>
            </div>

        </div>
    );
};

export default Whyus;