import React, { useEffect } from "react";
import Header from "../components/header";
import { Button, Table } from "antd";
import { Card, Space } from "antd";
import { useState } from "react";
import PrintBill from "../components/bills/PrintBill";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bills, setBills] = useState([]);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bill/get-all`);
        setBills(await res.json());
      } catch (error) {}
    };

    getBills();
  }, []);

  const columns = [
    {
      title: "İsim",
      dataIndex: "CustomerName",
      key: "isim",
    },
    {
      title: "Numara",
      dataIndex: "CustomerTel",
      key: "numara",
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "createdAt",
      key: "address",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      },
    },
    {
      title: "Ödeme Yöntemi",
      dataIndex: "CustomerSelect",
      key: "address",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "address",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <Button
            onClick={(e) => {
              setIsModalOpen(true);
              setCustomer(record);
            }}
            type="link"
            className="pl-0"
          >
            Yazdır
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
        <Table
          rowKey={"_id"}
          pagination={false}
          bordered
          dataSource={bills}
          columns={columns}
        />
      </div>
      <PrintBill
        customer={customer}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default BillPage;
