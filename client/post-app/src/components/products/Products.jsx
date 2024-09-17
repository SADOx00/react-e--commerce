import React from "react";

const Products = () => {
  return (
    <main className=" grid gap-4 products-wrapper">
      <article className="products-item">
        <div className="product-img ">
          <img
            className="h-28 border-b w-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/220px-Red_Apple.jpg"
            alt="apple"
          />
        </div>
        <div className="product-info">
          <span className="font-bold">ELma</span>
          <span> 18₺</span>
        </div>
      </article>
      <article className="products-item">
        <div className="product-img ">
          <img
            className="h-28 border-b w-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/220px-Red_Apple.jpg"
            alt="apple"
          />
        </div>
        <div className="product-info">
          <span className="font-bold">ELma</span>
          <span> 18₺</span>
        </div>
      </article>
    </main>
  );
};

export default Products;
