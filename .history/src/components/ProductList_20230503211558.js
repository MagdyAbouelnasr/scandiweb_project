import Product from "./Product";

export default function ProductList(){
    return (
    <><h1 className="page-header text-header">Product List</h1>
        <div className="flex">
            <div className="">
            <h1>Product List</h1>
            
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
            
            </div>
        </div></>



    )
}
