import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { PlusCircleOutlined } from "@ant-design/icons";
const Products = ({ categ }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCateg = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCateg();
  }, []);

  return (
    <>
      {" "}
      <ProductItem
        products={products}
        setProducts={setProducts}
        categ={categ}
        data={products}
      />
    </>
  );
};

export default Products;
