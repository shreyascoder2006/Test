import "./product.css";

function Product({ name, price, features = [] }) {
    let styles={backgroundColor:price>30000 ? "green" : ""}; 
  
    return (
        <div className="product" style={styles}>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{price>30000 ? " 5% Discount Available" : "No Discount"}</p>
            {/* <div>
                {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </div> */}
        </div>
    );
}

export default Product;
