// components/Basket.js
"use client"

import { useBasket } from '@/context/BasketContext';

const Basket = () => {
    const { basket } = useBasket();
    

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Basket</h1>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <div className="flex flex-row gap-6">
                    {basket.map((item, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-md">
                            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md mb-30" />
                            <h2 className="text-lg font-bold mt-4">{item.name}</h2>
                            <p>{item.size}</p>
                            <p>£{item.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Basket;

