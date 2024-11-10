import React from 'react';

const SinglePhone = ({phone, handleBuyButton}) => {
    const {name, model, picture, price} = phone;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>Model: {model}</p>
            <img src={picture} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>handleBuyButton(phone)}>Buy</button>
        </div>
    );
};

export default SinglePhone;