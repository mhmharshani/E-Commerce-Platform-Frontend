import { useEffect, useState } from "react";
import { getAllCategories } from "../api/categoryApi";

export default function useCategories(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try{
            const data = await getAllCategories();
            
            setCategories(data);
        } catch (err) {
            setError("Failed to load categories")
        } finally {
            setLoading(false);
        }
    };

    console.log("categories in useCategories : ",categories);

    return {categories, loading, error};

}
