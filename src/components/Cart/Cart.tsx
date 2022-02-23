import React, { useState } from "react";
import { Product } from "../../interfaces/i_product";
import CartItem from "./CartItem";

interface Props {
  cart: Product[];
}

function Cart({ cart }: Props) {
  const [total,setTotal] = useState<number>(0);
  return (
    <aside className="mt-3 ml-3 mr-3 w-full">
      <h2 className="text-4xl font-bold mb-4 underline">Your Shopping Cart</h2>
      {cart.map((product, index) => {
        return (
          <>
            <CartItem
              key={index}
              cart={cart}
              product={product}
              totalPrice={{ total, setTotal }}
            ></CartItem>
          </>
        );
      })}
      <h2 className="text-3xl">Total: {total}$</h2>
    </aside>
  );
}

export default Cart;
