import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import AppNavbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import useProducts from "../custom-hooks/useProducts";
import FooterSection from "../components/FooterSection";

export default function ProductPage(){
    
    const {products, loading, error } = useProducts();

    if(loading) return (
        <h2>Loading...</h2>
    );
    if (error) return (
        <h2>{error}</h2>
    );

    return (
        <div>
            <AppNavbar />

            <ProductGrid products={products} />

            <FooterSection />
            
        </div>
    );

}

