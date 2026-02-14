import Product from "./product.jsx"
function ProductTab() {
    // let features=["Next gen processor","High resolution display","Long battery life"];
    return (
        <div className="productTab">
            <Product name="Laptop" price={100000}   />
            <Product name="Phone" price={500} />
            <Product name="Tablet" price={300} />
        </div>
    );
}
export default ProductTab;
