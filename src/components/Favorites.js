import { useState, useEffect } from "react";
import Title from "components/ui/Title";
import Products from "fakeApi/products.json";
import ProductItem from "./ui/ProductItem";

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden ">
        {products.length &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
