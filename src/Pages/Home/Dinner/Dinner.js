import React from 'react';

const Dinner = ({dinner}) => {
    const {img, name, des, price} = dinner;
    return (
        <div className='col-12 col-lg-4 col-md-6 box'>
            <img height='200px'  src={img} alt="" />
            <h5>{name}</h5>
            <p>{des}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Dinner;