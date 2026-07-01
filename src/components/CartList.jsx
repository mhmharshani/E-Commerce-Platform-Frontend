
import { Card } from "flowbite-react";
import Image from "next/image";
import { CartItem } from "./CartItem";

export function CartList({ cartItems = [] }) {
  return (
    <Card className="max-w-sm">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </ul>
      </div>
    </Card>
  );
}
