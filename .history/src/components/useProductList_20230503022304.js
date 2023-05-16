import axios from "axios";
import { useEffect, useState } from "react";

export default function useProductList(){

    const [] = useState([]);
    useEffect(()=>{
        getProducts();
    }, []);

    function getProducts(){
        axios.get('http://localhost/react/api').then(function(response) {
            
        }
    }
}