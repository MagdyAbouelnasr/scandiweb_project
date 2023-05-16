import Product from "./Product";

export default function ProductList(){
    return (
            <>
        <div className="flex mt-5">
            <h1 className="page-header text-header text-start ">Product List</h1>
            <br />
            <div className="d-inline-flex p-2 flex-wrap mt-2">
            
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
