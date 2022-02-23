import React, { useEffect, useState } from "react";
import { Product } from "../../interfaces/i_product";
import Cart from "./Cart";

interface Props {
  product: Product;
  totalPrice: {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
  };
  cart: Product[];
}

function CartItem({ product, totalPrice, cart }: Props) {
  const { total, setTotal } = totalPrice;
  const [productCount, setProductCount] = useState<number>(1);

  const { title, id, image, price } = product;

  useEffect(() => {
    setTotal(() => {
      const prices = cart.map((item) => item.price);
      const reducer = (accumulator: number, curr: number) => accumulator + curr;
      return prices.reduce(reducer);
    });
  }, [productCount, cart]);

  return (
    <div
      key={id}
      className="flex h-40 mb-3 bg-white rounded-md mr-6 px-2 pt-1 border-b-sky-200 border-b-2 pb-2"
    >
      <article className="flex flex-col w-full">
        <section>
          <div className="flex flex-col flex-wrap">
            <h4 className="text-xl font-semibold">{title}</h4>
          </div>
          <div className="flex flex-row justify-between text-2xl pr-2">
            <h5 className="">Price: {price}$</h5>
            <h5 className="">Total: {productCount * price}$</h5>
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
              onClick={() => {
                if (productCount > 1) {
                  setProductCount(productCount - 1);
                }
              }}
            >
              -
            </button>
            <h5 className="text-4xl">{productCount}</h5>
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
              onClick={() => setProductCount(productCount + 1)}
            >
              +
            </button>
          </div>
        </section>
      </article>
      <div className="flex w-1/6">
        <img src={image} alt={title} className="object-cover" />
      </div>
    </div>
  ); //flex-container (row) => flex-item (column)
}

export default CartItem;
