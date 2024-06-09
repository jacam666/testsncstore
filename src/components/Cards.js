"use client";

import { Card } from "flowbite-react";

const CardComponent = ({Products}) => {
    return (
        // <div className="flex flex-row flex-wrap gap-10 justify-center m-9 border-none">
        //     {Products.map((product) => (
        //         <Card
        //             key={product.id}
        //             imgSrc={product.image}
        //             imgAlt={product.name}
        //             className="card-img"
        //         > 
        //             <a href="#">
        //                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        //                     {product.name}
        //                 </h5>
        //                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        //                     {product.flavour}
        //                 </h5>
        //                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        //                     {product.size}
        //                 </h5>
        //             </a>
        //             <div className="flex items-center justify-between">
        //                 <span className="text-3xl font-bold text-gray-900 dark:text-white">£{product.price}</span>
        //                 <a
        //                     href="#"
        //                     className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        //                 >
        //                     Add to cart
        //                 </a>
        //             </div>
        //         </Card>
        //     ))}
        // </div>
        // Adjusted styles for a more welcoming feel
<div className="flex flex-row flex-wrap gap-10 justify-center m-9 border-none">
    {Products.map((product) => (
        <Card
            key={product.id}
            imgSrc={product.image}
            imgAlt={product.name}
            className="card-img transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        > 
            <a href="#" className="hover:text-orange-500">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.flavour}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.size}
                </h5>
            </a>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">£{product.price}</span>
                <a
                    href="#"
                    className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    ))}
</div>

    );
}
export default CardComponent;