
import AppNavbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";
import ProductGrid from "../components/ProductGrid";
import useProducts from "../custom-hooks/useProducts";
import CategorySection from "../components/CategorySection";

function HomePage(){

    const { products, loading, error } = useProducts();

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;


    return (
        <>
            <div className="min-h-screen bg-gray-50">

                <AppNavbar />

                <HeroSection />

                <CategorySection />

                <ProductGrid products={products} />

                <FooterSection />

            </div>
        
        </>
    );
}

export default HomePage;