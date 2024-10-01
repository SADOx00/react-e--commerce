import { Button, message } from "antd";
import React from "react";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { delPrd, updPrd, reset } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, total, tax } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (value) => {
    let answer = window.confirm("Ürünü Silmek İstediğinize Emin misiniz?");
    if (answer) {
      dispatch(delPrd(value));
    }
  };

  const handleClick1 = (value) => {
    dispatch(updPrd({ ...value }));
  };
  const handleClick2 = () => {
    dispatch(reset());
  };
  return (
    <aside className="cart h-full max-h-[calc(100vh-100px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        {" "}
        Sepet
      </h2>
      <ul className="cart-item py-2 overflow-y-auto px-2 flex flex-col gap-y-3 pt-3 ">
        {cartItems.map((item) => {
          return (
            <li key={item._id} className="cart item flex justify-between">
              <div className="flex items-center">
                <img
                  onClick={() => handleClick(item)}
                  src={item.img}
                  alt="sade"
                  className="w-16 h-16 object-cover"
                  style={{ borderRadius: "10px" }}
                />
                <div
                  className="flex
               flex-col ml-2"
                >
                  <b>{item.title}</b>
                  <span>
                    {item.price}₺ X {item.quantity}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Button
                  onClick={() => handleClick1({ ...item, cmd: "decrease" })}
                  icon={<MinusCircleOutlined />}
                  className="my-2 rounded-full w-full flex items-center justify-center"
                  type="primary"
                  size="small"
                />
                <span>{item.quantity}</span>
                <Button
                  onClick={() => handleClick1({ ...item, cmd: "increase" })}
                  icon={<PlusCircleOutlined />}
                  className="my-2 rounded-full w-full flex items-center justify-center"
                  type="primary"
                  size="small"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t-black border-2 border-b-black">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>{total.toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %{tax}</b>
            <span className="text-red-700">
              {" "}
              +{((total / 100) * tax).toFixed(2)}
            </span>
          </div>
        </div>

        <div className="border-2 border-b-black">
          <div className="flex p-2 justify-between ">
            <b className="text-xg text-green-500">GenelToplam</b>
            <span className="text-xl">
              {((total / 100) * tax + total).toFixed(2)}₺
            </span>
          </div>
        </div>
        <div className="py-4 px-2 ">
          <Button
            onClick={() => {
              navigate("/cart");
            }}
            className="w-full"
            type="primary"
            size="large"
          >
            Sipariş Oluştur
          </Button>
          <Button
            onClick={() => handleClick2()}
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
