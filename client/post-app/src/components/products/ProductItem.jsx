import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import Add from "./Add";
import { addPrd, delPrd } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ products, categ, data, setProducts }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleclick = (value) => {
    dispatch(addPrd({ ...value, quantity: 1 }));
  };

  return (
    <main className=" grid grid-cols-card gap-4 products-wrapper">
      {data.map((item) => {
        return (
          <article
            key={item._id}
            onClick={() => handleclick(item)}
            className="products-item border hover:shadow-lg cursor-pointer transition-all "
          >
            <div className="product-img ">
              <img
                className="h-28 border-b w-full object-cover"
                src={item.img}
                alt="apple"
              />
            </div>
            <div className="product-info flex p-3 flex-col">
              <span className="font-bold">{item.title}</span>
              <span> {item.price}</span>
            </div>
          </article>
        );
      })}
      <div
        onClick={() => setIsAddModalOpen(true)}
        className=" flex min-h-36  bg-orange-700 justify-center items-center  "
      >
        <PlusCircleOutlined className="text-white md:text-5xl text-3xl" />
      </div>
      <div className=" flex min-h-36  bg-blue-700 justify-center items-center  ">
        <EditOutlined className="text-white md:text-5xl text-3xl" />
      </div>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categ={categ}
        products={products}
        setProducts={setProducts}
      />
    </main>
  );
};

export default ProductItem;
