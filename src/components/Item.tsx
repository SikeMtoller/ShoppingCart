import { useContext } from "react";
import { Product } from "../interfaces/i_product";
import { ProductContext } from "../App";
import "../item.css";

interface Props {
  product: Product;
}

function Item({ product }: Props) {
  const { id, title, image, description, rating, price } = product;
  const { addToCart } = useContext(ProductContext);
  return (
    <section className="flex flex-col border-r-4 max-w-sm border-gray-500 border-2 rounded-md">
      <article className="h-5/6 bg-white">
        <div className="overflow-hidden image-crop">
          <img className="" src={image} alt={title} />
        </div>
        <h2 className="font-bold">{title}</h2>
        <p className="mt-4">{description.slice(0, 400)}</p>
        <h4 className="font-bold pt-6">{price}$</h4>
      </article>
      <footer className="h-1/6 flex flex-col justify-end">
        <button
          className="text-slate-700 font-bold text-xl pb-3 hover:bg-slate-300"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add To Cart
        </button>
      </footer>
    </section>
  );
}

export default Item;
