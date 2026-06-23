import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try{
            const data = await getAllProducts();
            setProducts(data);
        } catch (err) {
            setError("Failed to load products")
        } finally {
            setLoading(false);
        }
    };

    if(loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <Navbar />
            <h1>Products</h1>

            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );

}

