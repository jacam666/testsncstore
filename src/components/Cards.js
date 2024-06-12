"use client";

import { useBasket } from "@/context/BasketContext";
import { Card } from "flowbite-react";
import { useState } from "react";

const CardComponent = ({ Products }) => {
    const { addToBasket } = useBasket();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleAddToBasket = (product) => {
        addToBasket(product);
        setAlertMessage(`${product.name} has been added to the basket.`);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 500); // Hide alert after 3 seconds
    };

    return (
        <div className="relative">
            {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
                        {alertMessage}
                    </div>
                </div>
            )}
        <div className="flex flex-row flex-wrap gap-10 justify-center m-9 border-none">
            {Products.map((product) => (
                <Card
                    key={product.id}
                    imgSrc={product.image}
                    imgAlt={product.name}
                    className="card-img transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                >
                    <div className="hover:text-orange-500">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {product.name}
                        </h5>
                        {product.flavour && (
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {product.flavour}
                            </h5>
                        )}
                        {product.size && (
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {product.size}
                            </h5>
                        )}
                    </div>
                    <div className="flex items-center justify-between card-button">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">£{product.price}</span>
                        <button
                            onClick={() => handleAddToBasket(product)}
                            className="rounded-lg bg-orange-500 px-5 py-2 text-center text-md font-medium text-black hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
                        >
                            Add to cart
                        </button>
                    </div>
                </Card>
            ))}
        </div>
        </div>
    );
};

export default CardComponent;
