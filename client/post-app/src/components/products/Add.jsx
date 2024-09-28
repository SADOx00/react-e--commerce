import { Button, Form, Input, message, Select } from "antd";
import Modal from "antd/es/modal/Modal";
import React from "react";

const Add = ({
  categ,
  products,
  isAddModalOpen,
  setProducts,
  setIsAddModalOpen,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-prd", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset = UTF-8" },
      });
      message.success("Kategori Başarıyla Eklendi.");
      form.resetFields();
      setProducts([
        ...products,
        {
          _id: Math.random(),
          price: Number(values.price),
          title: values.title,
          img: values.img,
          category: values.category,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      footer={false}
      onCancel={() => setIsAddModalOpen(false)}
      title="Ürün Ekle"
      open={isAddModalOpen}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name={"title"}
          rules={[{ required: true, message: "Bu Alan Zorunlu" }]}
          label="Ürün Adı"
        >
          <Input placeholder="Ürün Adı Giriniz" />
        </Form.Item>
        <Form.Item
          name={"img"}
          rules={[{ required: true, message: "Bu Alan Zorunlu" }]}
          label="Ürün Görseli"
        >
          <Input placeholder="Ürün Görseli Giriniz" />
        </Form.Item>
        <Form.Item
          name={"price"}
          rules={[{ required: true, message: "Bu Alan Zorunlu" }]}
          label="Ürün Fiyatı"
        >
          <Input type="Number" placeholder="Ürün Fiyatı Giriniz" />
        </Form.Item>
        <Form.Item
          name={"category"}
          rules={[{ required: true, message: "Bu Alan Zorunlu" }]}
          label="Kategori Seç"
        >
          <Select
            showSearch
            placeholder="Kategori Seç"
            optionFilterProp="title"
            options={categ}
          />
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button htmlType="submit" type="primary">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
