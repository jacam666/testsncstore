"use client";

import { useBasket } from '@/context/BasketContext';

export default function Basket() {
    const { basket, updateQuantity, removeFromBasket } = useBasket();

    const basketTotal = basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    return (
        <div className='basket-container'>
            <div className='basket-item-container bg-white opacity-90 border p-4 rounded-lg shadow-md m-4 xl:w-2/3 xl:mx-auto'>
                <h1 className="text-4xl text-center font-bold mb-4 text-[#007BFF]">Basket</h1>
                {basket.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    <div className="flex flex-col flex-wrap gap-6">
                        {basket.map((item, index) => (
                            <div key={item.id || index} className="flex flex-col sm:flex-row justify-between items-center gap-2 lg:gap-4 border shadow-md p-3">
                                <img src={item.image} alt={item.name} className="basket-image shadow-lg w-14 h-14 sm:w-20 sm:h-20 rounded-md mb-2 lg:mb-0" />
                                <div className="flex flex-col text-sm flex-1 w-full overflow-hidden">
                                    <h2 className="font-bold text-xs sm:text-lg m-auto">{item.name}</h2>
                                    <h3 className='m-auto text-xs xl:text-lg'>{item.flavour}</h3>
                                    <p className='flex m-auto text-xs xl:text-lg'>{item.size}</p>
                                </div>
                                <div className='flex items-center xl:text-xl'>
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className=" text-lg xl:text-xl font-medium text-gray-700 hover:text-black"
                                    >-</button>
                                    <span className="px-2 text-xs xl:text-xl">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="pr-2 text-lg  xl:text-xl font-medium text-gray-700 hover:text-black"
                                    >+</button>
                                </div>
                                <p className='font-bold text-xs sm:text-lg'>£{(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    onClick={() => removeFromBasket(item.id)}
                                    className="text-xs sm:text-md px-2 py-1 font-medium border rounded-lg bg-red-600 text-white hover:text-black "
                                >Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <p className='flex justify-end font-bold text-xs sm:text-xl mt-4'>Basket Total: £{basketTotal}</p>
            </div>
        </div>
    );
}