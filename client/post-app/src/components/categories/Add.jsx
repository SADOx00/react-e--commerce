import { Button, Form, Input, message } from "antd";
import Modal from "antd/es/modal/Modal";
import React from "react";

const Add = ({ isAddModalOpen, setIsAddModalOpen, setCateg, categ }) => {
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
      setCateg([...categ, { _id: Math.random(), title: values.title }]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      footer={false}
      onCancel={() => setIsAddModalOpen(false)}
      title="Kategori Ekle"
      open={isAddModalOpen}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
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
  );
};

export default Add;
