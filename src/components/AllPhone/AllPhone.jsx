import React, { useEffect, useState } from 'react';
import SinglePhone from '../SinglePhone/SinglePhone';
import { addToLocalStorage } from '../../assets/utlites/utlities';

const AllPhone = () => {
    const [phones, setPhones] = useState([]);

    const handleBuyButton = id =>{
        addToLocalStorage(id);
    }



    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPhones(data));
    },[])
    return (
        <div>
            {
                phones.map(element=><SinglePhone key={element.id} phone={element} handleBuyButton={handleBuyButton}></SinglePhone>)
            }
        </div>
    );
};

export default AllPhone;