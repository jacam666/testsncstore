// // context/BasketContext.js
// "use client"

// import { createContext, useContext, useEffect, useState } from 'react';

// const BasketContext = createContext();

// export const BasketProvider = ({ children }) => {
//     const [basket, setBasket] = useState([]);

//     const addToBasket = (product) => {
//         console.log("Adding product to basket:", product);

//         setBasket((prevBasket) => [...prevBasket, product]);
//         console.log("Basket after addition:", basket);
//     };

//     useEffect(() => {
//         console.log("Basket updated:", basket);
//     }, [basket]);

//     return (
//         <BasketContext.Provider value={{ basket, addToBasket }}>
//             {children}
//         </BasketContext.Provider>
//     );
// };

// export const useBasket = () => {
//     console.log('useBasket called');
//     return useContext(BasketContext);
// }

"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket((prevBasket) => [...prevBasket, product]);
    };

    useEffect(() => {
        console.log("Basket updated:", basket);
    }, [basket]);

    return (
        <BasketContext.Provider value={{ basket, addToBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    return useContext(BasketContext);
};
