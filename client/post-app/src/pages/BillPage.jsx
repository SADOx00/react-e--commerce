import React from "react";
import Header from "../components/header";
import { Button, Table } from "antd";
import { Card, Space } from "antd";
import { useState } from "react";
import PrintBill from "../components/bills/PrintBill";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
        <Table
          pagination={false}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        <div className="cart-total flex justify-end">
          <Space direction="vertical" size={16}>
            <Card className="w-72 p-3">
              <Button
                type="primary"
                onClick={(e) => setIsModalOpen(true)}
                className="mt-4 w-full"
              >
                Yazdır
              </Button>
            </Card>
          </Space>
        </div>
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default BillPage;
