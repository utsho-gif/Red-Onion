import React from 'react';
import './Breakfast.css';

const Breakfast = ({breakfast}) => {
    console.log(breakfast);
    const {img, name, des, price} = breakfast;
    return (
        <div className='col-12 col-lg-4 col-md-6 hover-shadow box'>
            <img height='200px'  src={img} alt="" />
            <h5>{name}</h5>
            <p>{des}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Breakfast;