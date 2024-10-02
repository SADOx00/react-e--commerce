import Header from "../components/header";
import { Table } from "antd";
import React, { useEffect, useState } from "react";

const CustomersPage = () => {
  const [bills, setBills] = useState([]);

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
      title: "Name",
      dataIndex: "CustomerName",
      key: "name",
    },
    {
      title: "Telephone",
      dataIndex: "CustomerTel",
      key: "age",
    },
    {
      title: "Last entered",
      dataIndex: "createdAt",
      key: "address",
      render: (text) => {
        return <span>{text.substring(1, 10)}</span>;
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
        <Table
          pagination={false}
          bordered
          dataSource={bills}
          columns={columns}
        />
      </div>
    </>
  );
};

export default CustomersPage;
