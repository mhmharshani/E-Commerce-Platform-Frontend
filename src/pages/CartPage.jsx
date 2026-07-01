import { useEffect, useState } from "react";
import { getCartItems } from "../api/cartApi";
import AppNavbar from "../components/Navbar";


function CartPage(){
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        try{
            const data = await getCartItems();
            setCartItems(data);
        } catch (err) {
            setError("Failed to load cart items")
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div>
            <AppNavbar />

            <CartList cartItems={cartItems} />

            <CartSummary />

            <FooterSection />
            
        </div>
    );

}
export default CartPage;