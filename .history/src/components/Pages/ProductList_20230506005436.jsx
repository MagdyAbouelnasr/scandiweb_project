import { useEffect } from "react";
import Product from "../Product/Product";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export default function ProductList() {

    useEffect(() => {
        axios.get
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

                    <Product className="" sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />
                    <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />
                    <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />
                    <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />
                    <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />
                    <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />
                    <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />
                    <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"} />

                </div>
            </div></>



    )
}
