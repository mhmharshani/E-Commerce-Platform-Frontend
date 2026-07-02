import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartUpdated, setCartUpdated] = useState(false);

    const refreshCart = () => {
        setCartUpdated(prev => !prev); // just a signal to indicate cart has been updated - state changed
    };

    return (
        <CartContext.Provider value={{ cartUpdated, refreshCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);