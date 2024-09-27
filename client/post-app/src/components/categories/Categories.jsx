import React from "react";

import { Button, Form, Input, message, Modal } from "antd";
import Add from "./Add";
import Edit from "./Edit";
import { useState } from "react";
import "./style.css";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

const Categories = ({ categ, setCateg }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset = UTF-8" },
      });
      message.success("Kategori Başarıyla Eklendi.");
      form.resetFields();
      setCateg([...categ, values]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="flex mr-10 overflow-auto md:flex-col text-xl gap-4 ">
      {categ.map((item) => (
        <li key={item._id} className="category-item">
          <span>{item.title}</span>
        </li>
      ))}

      <li
        onClick={() => setIsAddModalOpen(true)}
        className="category-item hover:opacity-90  !bg-purple-800"
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li
        onClick={() => setIsEditModalOpen(true)}
        className="category-item hover:opacity-90  !bg-orange-800"
      >
        <EditOutlined className="md:text-2xl" />
      </li>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        setCateg={setCateg}
        categ={categ}
      />
      <Edit
        categ={categ}
        setCateg={setCateg}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </ul>
  );
};

export default Categories;
