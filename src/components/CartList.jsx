
import { Card } from "flowbite-react";
import CartItem from "./CartItem";

export default function CartList({ cartItems = [] }) {
  return (

    <div className="space-y-6">
        {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
        ))}
    </div>
    
  );
}
