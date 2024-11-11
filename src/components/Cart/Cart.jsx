import React from 'react';

const Cart = ({cartData, handleRemoveFromCart}) => {
    return (
        <div>
           {
cartData.map(e=><div key={e.id}> 
    <p>Name: {e.name}</p>
    <p>Price: ${e.price}</p>
    <button onClick={()=>handleRemoveFromCart(e.id)}>X</button>
    </div>)
           }
        </div>
    );
};

export default Cart;