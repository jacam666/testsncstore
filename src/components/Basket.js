"use client";

import { useBasket } from '@/context/BasketContext';

export default function Basket() {
    const { basket, updateQuantity, removeFromBasket } = useBasket();

    const basketTotal = basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className='basket-container py-8'>
            <div className='basket-item-container my-4 bg-white border p-4 rounded-lg shadow-md lg:w-3/4 mx-auto'>
                <h1 className="text-4xl text-center mb-4 font-bold text-[#007BFF]">Basket</h1>
                {basket.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    <div className="flex flex-col gap-4">
                        {basket.map((item, index) => (
                            <div key={item.id || index} className="flex flex-row items-center justify-between border shadow-lg p-2">
                                <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md shadow-lg" />
                                </div>
                                <div className="flex-1 sm:px-12">
                                    <h2 className="font-bold text-xs sm:text-lg">{item.name}</h2>
                                    {item.flavour && <h3 className='text-xs xl:text-md'>{item.flavour}</h3>}
                                    <p className='text-xs xl:text-md'>{item.size}</p>
                                </div>
                                <div className="flex items-center sm:px-12">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="px-2 text-lg xl:text-xl font-medium text-gray-700 hover:text-black"
                                    >-</button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="px-2 text-lg xl:text-xl font-medium text-gray-700 hover:text-black"
                                    >+</button>
                                </div>
                                <p className='font-bold text-xs sm:text-lg sm:px-12 mr-3'>£{(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    onClick={() => removeFromBasket(item.id)}
                                    className="text-xs sm:text-md px-3 py-1 font-medium border rounded-lg bg-red-600 text-white hover:text-black"
                                >Remove</button>
                            </div>
                        ))}
                    </div>
                )}
                <p className='flex justify-end font-bold text-xs sm:text-xl mt-4'>Basket Total: £{basketTotal}</p>
            </div>
        </div>
    );
}