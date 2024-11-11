import React, { useEffect, useState } from "react";
import SinglePhone from "../SinglePhone/SinglePhone";
import Cart from "../cart/cart";
import { addToLocalStorage, getLocalStorageData, removeFromLocalStorage } from "../utlites/utlities";

const AllPhone = () => {
  const [phones, setPhones] = useState([]);
  const [cartData, setCartData] = useState([]);

  const handleBuyButton = phone => {
    const newPhone = [...cartData, phone];
    setCartData(newPhone)
    addToLocalStorage(phone.id);
  };

  const handleRemoveFromCart = id =>{

    const remaing= cartData.filter(idx=>idx.id !==id);
    setCartData(remaing);
    removeFromLocalStorage(id);
  }
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  useEffect(() => {
    if (phones.length > 0) {
      const localStorageData = getLocalStorageData();
      const savedCart = [];
      for (const id of localStorageData) {
        const phone = phones.find((element) => element.id === id);
        if (phone){
            savedCart.push(phone)
        }
      }
      setCartData(savedCart);
    }
  }, [phones]);

  return (
    <div className="flex gap-2">
      <div className="grid grid-cols-3 gap-5 w-4/5">
      {phones.map((element) => (
        <SinglePhone
          key={element.id}
          phone={element}
          handleBuyButton={handleBuyButton}
        ></SinglePhone>
      ))}
      </div>
      {/* cart show on display */}
      <div className="w-1/5">
      <h2 className="font-bold text-2xl">Selected Item</h2>
        <p>Total Item: {cartData.length}</p>
        <Cart cartData= {cartData} handleRemoveFromCart={handleRemoveFromCart}></Cart>
        </div>
    </div>
  );
};

export default AllPhone;
