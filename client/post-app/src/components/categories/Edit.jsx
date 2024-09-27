import { Button, Form, Input, Modal, Table } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

const Edit = ({ categ, setCateg, isEditModalOpen, setIsEditModalOpen }) => {
  const [editingRow, setEditingRow] = useState({});
  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <FormItem>
              <Input value={record.title}></Input>
            </FormItem>
          );
        } else {
          return <p>{record.title}</p>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <div>
            <Button onClick={() => setEditingRow(record)} type="link">
              Düzenle
            </Button>
            <Button type="text">Kaydet</Button>
            <Button danger type="text">
              Sil
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <Modal
      onCancel={() => setIsEditModalOpen(false)}
      title={"Kategori İşlemleri"}
      footer={false}
      open={isEditModalOpen}
    >
      <Form>
        <Table
          rowKey={"_id"}
          columns={columns}
          dataSource={categ}
          bordered
        ></Table>
      </Form>
    </Modal>
  );
};

export default Edit;
