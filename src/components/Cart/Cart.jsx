import React from 'react';

const Cart = ({phone}) => {
    return (
        <div>
           <p>Name: {phone?.name}</p>
           <p>Price: {phone?.price}</p>
        </div>
    );
};

export default Cart;