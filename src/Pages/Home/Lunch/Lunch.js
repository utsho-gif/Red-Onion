import React from 'react';

const Lunch = ({lunch}) => {
    const {img, name, des, price} = lunch;
    return (
        <div className='col-12 col-lg-4 col-md-6 box'>
            <img src={img} height='200px' alt="" />
            <h5>{name}</h5>
            <p>{des}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Lunch;