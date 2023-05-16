import { useEffect , useState} from "react";
import Product from "../Product/Product";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const localCashe = {};

export default function ProductList() {

    const [status, setStatus] = useState("unloaded");
    const [ products , setProducts ] = useState([]);


    useEffect(() => {


        
        axios.get('http://localhost:8000').then((response) => {
            setStatus("loading");

            //  console.log(response);
             setProducts(response.data);

            setStatus("loaded");

            }, []);
    })

    const navigate = useNavigate();
    return (
        <>
            <div className="flex mt-5">
                <div className="row">
                    <h1 className="page-header text-header col-md-8 text-start ">Product List</h1>
                    <div className='col-4 float-end'>
                        <Button onClick={()=> navigate('addproduct')} className='p-2 ms-2' variant="primary" size="sm">
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
                        products.map((product, key) => 

                        <Product key={key} className="" sku={product.sku} name={product.name} price={product.price} product_attribute={product.product_attribute} typeValue={product.product_attribute_value} />

                        )}
                </div>
            </div></>



    )
}
