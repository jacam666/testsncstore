// "use client"

// import CardComponent from '@/components/Cards';
// const { default: Basket } = require("@/components/Basket");

// const BasketPage = () => {
//     return (
//         <div>
//         <Basket />
//         </div>
//     );
// }

// export default BasketPage;
// import { useBasket } from '@/context/BasketContext';


// function BasketPage() {
//     const { basket } = useBasket();
//     console.log("Basket items on BasketPage:", basket);


//     return (
//         <div>
//             <h1>Your Basket</h1>
//             {basket.length > 0 ? (
//                 <CardComponent Products={basket} />
//             ) : (
//                 <p>Your basket is empty.</p>
//             )}
//         </div>
//     );
// }

// export default BasketPage;

"use client";

import { useBasket } from '@/context/BasketContext';
import CardComponent from '@/components/Cards';
import Basket from '@/components/Basket';

function BasketPage() {
    const { basket } = useBasket();
    console.log("Basket items on BasketPage:", basket);

    return (
        <div>
            {/* <h1>Your Basket</h1>
            {basket.length > 0 ? (
                <CardComponent Products={basket} />
            ) : (
                <p>Your basket is empty.</p>
            )} */}
            <Basket />
        </div>
        
    );
}

export default BasketPage;
