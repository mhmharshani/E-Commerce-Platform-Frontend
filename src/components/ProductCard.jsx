export default function ProductCard({product}){
    return (
        <div style={{ border: "1px solid #ddd", padding: 10, margin: 10 }}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>1``
            
        </div>
    );
}
