import React, { createContext, createElement } from 'react';
import all_product from "../Components/Assets/all_product"
import { useState } from 'react';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
        cart[i] = 0;
    }
    return cart;
}



export const ShopContextProvider = ( props ) => {
    
    const [cartItems, setCartItem] = useState(getDefaultCart());
    const [searchTerm, setSearchTerm] = useState('');
    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]+1}));
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]-1}));
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
            
        }
        return totalAmount.toFixed(2);;
    }
    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = {
        getTotalCartItem, 
        getTotalCartAmount, 
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart, 
        searchTerm, 
        setSearchTerm
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

