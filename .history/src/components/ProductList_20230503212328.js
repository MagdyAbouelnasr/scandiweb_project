import Product from "./Product";

export default function ProductList(){
    return (
            <>
        <div className="flex">
            <h1 className="page-header text-header">Product List</h1>
            <div className="d-inline-flex p-4 justify-content-center flex-wrap">
            
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
           <Product sku={"1231sad"} name={"asdad"} price={22} type={"furniture"} typeValue={"5neter"}/>
            
            </div>
        </div></>



    )
}
