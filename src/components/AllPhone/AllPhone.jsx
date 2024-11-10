import React, { useEffect, useState } from "react";
import SinglePhone from "../SinglePhone/SinglePhone";
import {
  addToLocalStorage,
  getLocalStorageData,
} from "../../assets/utlites/utlities";
import Cart from "../cart/cart";

const AllPhone = () => {
  const [phones, setPhones] = useState([]);
  const [cartData, setCartData] = useState([]);

  const handleBuyButton = phone => {
    const newPhone = [...cartData, phone];
    setCartData(newPhone)
    addToLocalStorage(phone.id);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  useEffect(() => {
    if (phones.length > 0) {
      const localStorageData = getLocalStorageData();
      console.log(localStorageData, phones);
      const savedCart = [];
      for (const id of localStorageData) {
        const phone = phones.find((element) => element.id === id);
        if (phone){
            savedCart.push(phone)
        }
      }
      console.log(savedCart);
      setCartData(savedCart);
    }
  }, [phones]);

  return (
    <div>
        <p>Total Item: {cartData.length}</p>
        <Cart cartData= {cartData}></Cart>
      <div>
      {phones.map((element) => (
        <SinglePhone
          key={element.id}
          phone={element}
          handleBuyButton={handleBuyButton}
        ></SinglePhone>
      ))}
      </div>
    </div>
  );
};

export default AllPhone;
