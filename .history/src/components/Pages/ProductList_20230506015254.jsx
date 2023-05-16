import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductList() {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000').then((response) => {
    //        setProducts(response.data);
    //        console.log(response.data);
    //     }, []);
    // })

    useEffect(()=>{
        requestProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //empty array so that it makes the request once 

    async function requestProducts(){
        const res = await fetch(
            `http://localhost:8000`
        );
        const json = await res.json();
        setProducts(json.pets);
    }

    const navigate = useNavigate();
    return (
        <>
            <div className="flex mt-5">
                <div className="row">
                    <h1 className="page-header text-header col-md-8 text-start ">Product List</h1>
                    <div className='col-4 float-end'>
                        <Button onClick={() => navigate('addproduct')} className='p-2 ms-2' variant="primary" size="sm">
                            Add
                        </Button>
                        <Button className='p-2 ms-2' variant="secondary" size="sm">
                            Mass Delete
                        </Button>
                    </div>
                </div>
                <br />
                <div className="d-inline-flex p-2 flex-wrap mt-2">

                    {
                        products.map((product, key) => (

                            <Product key={product.id} className="" producy />

                        ))}
                </div>
            </div></>



    )
}