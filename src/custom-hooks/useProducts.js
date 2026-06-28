import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";

export default function useProducts(){
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

    return {products, loading, error};

}
