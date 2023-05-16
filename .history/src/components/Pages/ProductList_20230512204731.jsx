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
            let index = array.indexOf(data);
            array.splice(index, 1);
        } else {
            array.push(data);
        }

        selectedProdutsDelete.filter(prod => prod !== data);
        selectedProdutsDelete.push(data);
        console.log(data , 'data');
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
                    <h1 className="page-header text-header col-md-8 text-start ">Product List</h1>
                    <div className='col-4 float-end'>
                        <Button onClick={() => navigate('addproduct')} className='p-2 ms-2' variant="primary" size="sm">
                            Add
                        </Button>
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
