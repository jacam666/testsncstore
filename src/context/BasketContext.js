// "use client";

// import { createContext, useContext, useState, useEffect } from 'react';

// const BasketContext = createContext();

// export const BasketProvider = ({ children }) => {
//     const [basket, setBasket] = useState([]);

//     const addToBasket = (product) => {
//         console.log("Adding product: ", product);
//         setBasket((prevBasket) => [...prevBasket, product]);
//     };

//     useEffect(() => {
//     }, [basket]);

//     return (
//         <BasketContext.Provider value={{ basket, addToBasket }}>
//             {children}
//         </BasketContext.Provider>
//     );
// };

// export const useBasket = () => {
//     return useContext(BasketContext);
// };
"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket(prevBasket => {
            const existingProduct = prevBasket.find(item => item.id === product.id);
            if (existingProduct) {
                return prevBasket.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevBasket, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromBasket = (productId) => {
        setBasket(prevBasket => {
            return prevBasket.filter(item => item.id !== productId);
        });
    };

    const updateQuantity = (productId, quantity) => {
        setBasket(prevBasket => {
            return prevBasket.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
            ).filter(item => item.quantity > 0);
        });
    };

    useEffect(() => {
        console.log("Basket updated: ", basket);
    }, [basket]);

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, updateQuantity }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    return useContext(BasketContext);
};