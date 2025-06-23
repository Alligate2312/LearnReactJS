import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 999,
    description: "Latest smartphone with amazing camera",
    image:
      "https://th.bing.com/th/id/OIP.-TFZkn4-Co9EgKsR5ANyXQHaEK?r=0&rs=1&pid=ImgDetMain",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 120,
    description: "Comfortable running shoes",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/jhrqmz92anpn41uoepjq/NIKE+AIR+MAX+EXCEE.png",
    category: "Fashion",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 89,
    description: "Brew perfect coffee every morning",
    image:
      "https://th.bing.com/th/id/OIP.v7ORILVh4Fl0C88CzQDN9QHaHa?r=0&rs=1&pid=ImgDetMain",
    category: "Home",
  },
];

function ProductList({ onAddToCart, onViewDetails }) {
  return (
    <ul>
      {products.map((product) => (
        <li style={{ listStyleType: "none" }} key={product.id}>
          <ProductCard
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            category={product.category}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
