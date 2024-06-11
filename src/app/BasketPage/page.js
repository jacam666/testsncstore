"use client";

import Basket from "@/components/Basket";
import { useBasket } from "@/context/BasketContext";
import { useEffect } from "react";


function BasketPage() {
    const { basket } = useBasket();

    useEffect(() => {
        console.log('BasketPage context data:', basket);
    }, [basket]);

    return (
        <div>
            <Basket />
        </div>
    );
}
export default BasketPage;