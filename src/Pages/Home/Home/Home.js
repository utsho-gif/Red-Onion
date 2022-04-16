import React from 'react';
import { Outlet } from 'react-router-dom';
import banner from '../../../images/bannerbackground.png';
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {
    return (
        <div>
            <img className='img-fluid' height='500px' width='100%' src={banner} alt=""/>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <CustomLink to='/home/breakfast' className='me-2'>Breakfast</CustomLink>
                <CustomLink to='/home/lunch' className='me-2'>Lunch</CustomLink>
                <CustomLink to='/home/dinner'>Dinner</CustomLink>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;