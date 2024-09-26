import React from "react";
import "./style.css";
import { Button, Form, Input, Modal } from "antd";

import { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <ul className="flex mr-10 overflow-auto md:flex-col text-xl gap-4 ">
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li className="category-item">
        <span>Tümü</span>
      </li>
      <li
        onClick={() => setIsAddModalOpen(true)}
        className="category-item hover:opacity-90  !bg-purple-800"
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <Modal
        footer={false}
        onCancel={() => setIsAddModalOpen(false)}
        title="Kategori Ekle"
        open={isAddModalOpen}
      >
        <Form layout="vertical">
          <Form.Item
            name={"title"}
            rules={[{ required: true, message: "Bu Alan Zorunlu" }]}
            label="Kategori Ekle"
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Button htmlType="submit" type="primary">
              Ekle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
