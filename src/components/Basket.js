// components/Basket.js
"use client"

import { useBasket } from '@/context/BasketContext';

export default function Basket() {
    const { basket } = useBasket();
    console.log("Rendering Basket component");
    console.log("Basket contents in basket component: ", basket);

    const basketTotal = basket.reduce((total, item) => total  + item.price, 0).toFixed(2);

    return (
        <div className='border p-4 rounded-lg shadow-md m-4'>
            <h1 className="text-4xl text-center font-bold mb-4">Basket</h1>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <div className="flex flex-col flex-wrap gap-6">
                    {basket.map((item, index) => (
                        <div key={item.id || index} className="flex flex-row justify-between">
                            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md mb-30" />
                            <div className="flex flex-col text-sm">
                            <h2 className=" font-bold text-md m-auto">{item.name}</h2>
                            <p className='flex m-auto'>{item.size}</p>
                            </div>
                            <p className=''>£{item.price}</p>
                        </div>
                    ))}
                </div>
            )}
            <p className='flex justify-end'>£{basketTotal}</p>
        </div>
    );
};

// export default Basket;

