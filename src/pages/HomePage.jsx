
import AppNavbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FooterSection from "../components/FooterSection";

function HomePage(){

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <AppNavbar />

                <HeroSection />

                {/* <CategorySection />

                <ProductGrid /> */}

                <FooterSection />
            </div>
        
        </>
    );
}

export default HomePage;