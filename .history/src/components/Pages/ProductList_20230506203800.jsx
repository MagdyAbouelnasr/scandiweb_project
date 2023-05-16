import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export async function requestProducts(){
    const res = await fetch(
        `http://localhost:8000`
    );
    const json = await res.json();
    console.log(json);
    return json;
}

export default function ProductList() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000').then((response) => {
    //        setProducts(response.data);
    //        console.log(response.data);
    //     }, []);
    // })

    useEffect(()=>{
       const json = requestProducts();
        setProducts(json);
        
    }, []); 
   

    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/${id}/deleteproduct`).then((response)=>{
            console.log(response.data);
            requestProducts();
        });
    }

    return (
        <>
            <div className="flex mt-5">
                <div className="row">
                    <h1 className="page-header text-header col-md-8 text-start ">Product List</h1>
                    <div className='col-4 float-end'>
                        <Button onClick={() => navigate('addproduct')} className='p-2 ms-2' variant="primary" size="sm">
                            Add
                        </Button>
                        <Button onClick={() => deleteProduct(products.id)} id="delete-product-btn" className='p-2 ms-2' variant="secondary" size="sm">
                            Mass Delete
                        </Button>
                    </div>
                </div>
                <br />
                <div className="d-inline-flex p-2 flex-wrap mt-2">

                    {
                        products.map((product, key) => (

                            <Product key={product.id} className="" product={product} />

                        ))}
                </div>
            </div></>



    )
}
