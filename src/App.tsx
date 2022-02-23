import React, { useEffect, useState, useContext } from "react";
import "./App.css";

import { Product } from "./interfaces/i_product";

import List from "./components/Products/List";
import Cart from "./components/Cart/Cart";

export const ProductContext = React.createContext<any>({} as any);
function App() {
  const [list, SetList] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (id: number) => {
    const addedItem = list.find((item) => item.id === id);
    if (addedItem) {
      setCart([...cart, addedItem]);
    }
  };

  const fetchProdutcs = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const users = await response.json();
    SetList(users);
  };

  useEffect(() => {
    fetchProdutcs();
  }, []);

  return (
    <ProductContext.Provider value={{ addToCart }}>
      <div className="flex flex-row">
        <main className="mt-5 ml-8 grid grid-cols-3 gap-y-5 w-8/12 ">
          <List list={list} key={1} />
        </main>
        <nav className="w-4/12">
          {cart.length != 0 && <Cart cart={cart} key={2}></Cart>}
        </nav>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
