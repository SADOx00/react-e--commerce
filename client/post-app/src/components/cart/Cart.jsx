import { Button } from "antd";
import React from "react";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const Cart = () => {
  return (
    <aside className="cart h-full max-h-[calc(100vh-100px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        {" "}
        Sepet
      </h2>
      <ul className="cart-item py-2 overflow-y-auto px-2 flex flex-col gap-y-3 pt-3 ">
        <li className="cart item flex justify-between">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/220px-Red_Apple.jpg"
              alt="sade"
              className="w-16 h-16 object-cover"
              style={{ borderRadius: "10px" }}
            />
            <div
              className="flex
             flex-col ml-2"
            >
              <b>Pizza</b>
              <span>12₺ X 2</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button
              icon={<MinusCircleOutlined />}
              className="my-2 rounded-full w-full flex items-center justify-center"
              type="primary"
              size="small"
            />
            <span>1</span>
            <Button
              icon={<PlusCircleOutlined />}
              className="my-2 rounded-full w-full flex items-center justify-center"
              type="primary"
              size="small"
            />
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t-black border-2 border-b-black">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %8</b>
            <span className="text-red-700"> +9.75</span>
          </div>
        </div>

        <div className="border-2 border-b-black">
          <div className="flex p-2 justify-between p-2">
            <b className="text-xg text-green-500">GenelToplam</b>
            <span className="text-xl">99₺</span>
          </div>
        </div>
        <div className="py-4 px-2 ">
          <Button className="w-full" type="primary" size="large">
            Sipariş Oluştur
          </Button>
          <Button
            icon={<ClearOutlined />}
            className="my-2 w-full flex items-center justify-center"
            type="primary"
            danger
            size="large"
          >
            Temizle
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
