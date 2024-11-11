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

const addToLocalStorage= id =>{
    const cart = getLocalStorageData();
    cart.push(id);
    saveDataLocalStorage(cart)

}

const removeFromLocalStorage = id =>{
    const getData = getLocalStorageData();
    console.log('get data', getData);
    const remaning = getData.filter(item=>item !== id);
    console.log('remaning', remaning);
    saveDataLocalStorage(remaning);
}

export {addToLocalStorage, getLocalStorageData, removeFromLocalStorage};