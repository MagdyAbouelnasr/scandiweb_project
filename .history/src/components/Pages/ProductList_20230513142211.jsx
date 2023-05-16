import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductList() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    let selectedProdutsDelete = [];

    const setSelectedProductsDelete = (data) => {

        if (selectedProdutsDelete.includes(data)) {
            let index = selectedProdutsDelete.indexOf(data);
            selectedProdutsDelete.splice(index, 1);
        } else {
            selectedProdutsDelete.push(data);
        }

    }

    useEffect(()=>{
        requestProducts();
    }, []); 
    async function requestProducts(){
        const res = await fetch(
            `http://localhost:8000`
        );
        const json = await res.json();
        console.log(json);
        setProducts(json);
    }

    const deleteProducts = () => {
        selectedProdutsDelete.forEach(product => deleteProduct(product))
    }

    const deleteProduct = (id)=>{
        console.log(id);
        axios.delete(`http://localhost:8000/${id}/deleteproduct`).then((response)=>{
            console.log(response.data);
            requestProducts();
        });
    }

    return (
        <>
            <div className="flex mt-5">
                <div className="row">
                    <h1 className="page-header text-header col-md-89 text-start ">Product List</h1>
                    <div className='col-4 '>
                        <Button onClick={() => navigate('addproduct')} className='p-2 ms-2' variant="primary" size="sm">
                            Add
                        </Button>
                    </div>
                    <div className='col-4'>
                        <Button onClick={deleteProducts} id="delete-product-btn" className='p-2 ms-2' variant="secondary" size="sm">
                            Mass Delete
                        </Button>
                    </div>
                </div>
                <br />
                <div className="d-inline-flex p-2 flex-wrap mt-2">

                    {
                        products.map((product, key) => (

                            <Product selectedProducts={setSelectedProductsDelete} key={product.id} className="" product={product} />

                        ))}
                </div>
            </div></>



    )
}
