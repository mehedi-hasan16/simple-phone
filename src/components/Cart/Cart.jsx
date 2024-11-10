import React from 'react';

const Cart = ({cartData}) => {
    console.log(cartData);
    return (
        <div>
           {
cartData.map(e=><p>{e.name}</p>)
           }
        </div>
    );
};

export default Cart;