import { useContext } from "react";
import { Product } from "../../interfaces/i_product";
import { ProductContext } from "../../App";
import "./item.css";

interface Props {
  product: Product;
}

function Item({ product }: Props) {
  const { id, title, image, description, rating, price } = product;
  const { addToCart } = useContext(ProductContext);
  return (
    <section
      className="flex flex-col shadow-lg bg-white border-r-4
    border-gray-400 max-w-sm  border-2 rounded-lg"
    >
      <article className="h-5/6 bg-white">
        <div className="overflow-hidden image-crop">
          <img className="" src={image} alt={title} />
        </div>
        <div className="pl-2">
          <h2 className="font-bold">{title}</h2>
          <p className="mt-4">{description.slice(0, 400)}</p>
          <h4 className="font-bold pt-6">{price}$</h4>
        </div>
      </article>
      <footer className="h-1/6 flex flex-col justify-end">
        <button
          className="text-slate-700 rounded-sm font-bold text-xl pb-3 hover-effect
          transition ease-in-out hover:bg-indigo-500 delay-75
          "
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
