import { useEffect, useState } from "react";

export default function useProductList(){

    const [] = useState([]);
    useEffect(()=>{
        getProducts();
    }, []);

    function getProducts()
}