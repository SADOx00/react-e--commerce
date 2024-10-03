import { Button, Form, Input, message, Modal, Table } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

const Edit = ({ categ, setCateg, isEditModalOpen, setIsEditModalOpen }) => {
  const [editingRow, setEditingRow] = useState({});

  const handleInputChange = (e) => {
    setEditingRow({ ...editingRow, title: e.target.value });
  };

  const handleClick = async (record) => {
    if (editingRow._id === record._id) {
      try {
        const response = await fetch(
          process.env.REACT_APP_SERVER_URL + "/api/categories/upd-cat",
          {
            method: "PUT",
            body: JSON.stringify({
              categoryId: record._id,
              title: editingRow.title,
            }),
            headers: { "Content-type": "application/json; charset = UTF-8" },
          }
        );

        if (response.ok) {
          message.success("Kategori Başarıyla Güncellendi.");
          setCateg((prev) =>
            prev.map((cat) =>
              cat._id === record._id ? { ...cat, title: editingRow.title } : cat
            )
          );
        } else {
          message.error("Kategori güncellenirken bir hata oluştu.");
        }
      } catch (error) {
        console.log(error);
        message.error("Sunucuya bağlanırken bir hata oluştu.");
      } finally {
        setEditingRow({});
      }
    }
  };

  const handleClick_2 = async (record) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + "/api/categories/del-cat",
        {
          method: "DELETE",
          body: JSON.stringify({
            categoryId: record._id,
          }),
          headers: { "Content-type": "application/json; charset = UTF-8" },
        }
      );

      if (response.ok) {
        message.warning("Kategori Başarıyla Silindi.");
        setCateg((prev) => prev.filter((cat) => cat._id !== record._id));
      } else {
        message.error("Kategori silinirken bir hata oluştu.");
      }
    } catch (error) {
      console.log(error);
      message.error("Sunucuya bağlanırken bir hata oluştu.");
    } finally {
      setEditingRow({});
    }
  };

  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <FormItem name={"title"}>
              <Input
                defaultValue={editingRow.title}
                value={editingRow.title}
                onChange={handleInputChange}
              />
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
            <Button
              onClick={() => handleClick(record)}
              className="text-green-600"
              type="text"
            >
              Kaydet
            </Button>
            <Button onClick={() => handleClick_2(record)} danger type="text">
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
        <Table rowKey={"_id"} columns={columns} dataSource={categ} bordered />
      </Form>
    </Modal>
  );
};

export default Edit;
