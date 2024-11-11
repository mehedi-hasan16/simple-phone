import React from 'react';

const SinglePhone = ({phone, handleBuyButton}) => {
    const {name, model, picture, price} = phone;
    return (
        <div className='border-2 p-9 border-green-600 rounded-xl'>
            <img src={picture} alt="" />
            <h4 className='font-bold'>Name: {name}</h4>
            <p>Model: {model}</p>
            <p >Price: <span className='text-red-500 font-bold'>${price}</span></p>
            <button className='btn btn-outline btn-success' onClick={()=>handleBuyButton(phone)}>Add to cart</button>
        </div>
    );
};

export default SinglePhone;