import React from "react";
import Header from "../components/header";
import { Button, Table } from "antd";
import { Card, Space } from "antd";
import { useState } from "react";

import CreateBill from "../components/cart/CreateBill";
import { useSelector, useDispatch } from "react-redux";
import { delPrd } from "../redux/cartSlice";
const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const handleClick = (value) => {
    let answer = window.confirm("Ürünü Silmek İstediğinize Emin misiniz?");
    if (answer) {
      dispatch(delPrd(value));
    }
  };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Görsel",
      width: "125px",
      dataIndex: "img",
      key: "img",
      render: (text) => {
        return <img src={text} alt="" className="w-full h-20 object-cover" />;
      },
    },
    {
      title: "Ürün Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Kategory",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Fiyat",
      dataIndex: "price",
      key: "price",
      render: (text, record) => {
        return <span>{record.price * record.quantity}₺</span>;
      },
    },
    {
      title: "Adet",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "button",
      key: "button",
      render: (_, text) => {
        return (
          <Button onClick={() => handleClick(text)} type="link">
            Sİl
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          pagination={false}
          bordered
          dataSource={cart.cartItems}
          columns={columns}
        />
        <div className="cart-total flex justify-end">
          <Space direction="vertical" size={16}>
            <Card className="w-72 p-3">
              <div className="flex justify-between">
                <span>Ara toplam</span>
                <span>549.00₺</span>
              </div>
              <div className="flex justify-between my-4">
                <span>KDV</span>
                <span className="text-red-700">+%54</span>
              </div>
              <div className="flex justify-between">
                <b>Toplam</b>
                <b className="text-red-700">540</b>
              </div>
              <Button
                type="primary"
                onClick={(e) => {
                  setIsModalOpen(true);
                }}
                className="mt-4 w-full"
              >
                Sipariş oluştur
              </Button>
            </Card>
          </Space>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
