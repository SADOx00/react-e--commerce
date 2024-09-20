import React from "react";
import Header from "../components/header";
import { Button, Table } from "antd";
import { Card, Space } from "antd";

const CartPage = () => {
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          pagination={false}
          bordered
          dataSource={dataSource}
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
              <Button type="primary" className="mt-4 w-full">
                Sipariş oluştur
              </Button>
            </Card>
          </Space>
        </div>
      </div>
    </>
  );
};

export default CartPage;
