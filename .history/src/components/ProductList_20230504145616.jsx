import Product from "./Product";
import Button from 'react-bootstrap/Button';


export default function ProductList() {
    return (
        <>
            <div className="flex mt-5">
                <div className="row">
                    <h1 className="page-header text-header col-md-8 text-start ">Product List</h1>
                    <div className='col-4 float-end'>
                        <Button className='p-2 ms-2' variant="primary" size="sm">
                            Add
                        </Button>
                        <Button className='p-2 ms-2' variant="secondary" size="sm">
                            Delete
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
