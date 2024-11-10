const getLocalStorageData = () =>{
    const localStorageData = localStorage.getItem('cart');
    if(localStorageData){
        return JSON.parse(localStorageData)
    }
    return [];
}

const saveDataLocalStorage = cart =>{
    const stringify = JSON.stringify(cart);
    localStorage.setItem('cart', stringify)
}

const addToLocalStorage= id=>{
    const cart = getLocalStorageData();
    cart.push(id);
    saveDataLocalStorage(cart)

}

export {addToLocalStorage, getLocalStorageData};