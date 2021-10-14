import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import banner from '../../../images/bannerbackground.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            {/* <img className='img-fluid banner-img w-100' src={banner}
                alt="" /> */}
            <div>
                <h2>Best food waiting for your belly</h2>
                <InputGroup className="mb-3 mt-3 w-75 m-auto">
                    <FormControl
                        placeholder="search food items"
                        aria-label=""
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text className='search-btn outline-secondary  ' id="basic-addon2">Search</InputGroup.Text>
                </InputGroup>
            </div>
        </div>
    );
};

export default Banner;