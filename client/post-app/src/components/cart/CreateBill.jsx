import { Form, Input, Modal, Select, Button, Card, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const onFinish = (value) => {
    console.log(value);
    try {
      fetch("http://localhost:5000/api/bill/add-bll", {
        method: "POST",
        body: JSON.stringify({
          ...value,
          subtotal: cart.total,
          tax: cart.tax,
          totalAmount: cart.total + cart.tax,
          cardItems: cart.cartItems,
        }),
        headers: { "Content-type": "application/json; charset = UTF-8" },
      });
      message.success("Fatura olusturma basarılıç");
      navigate("/bills");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal
        footer={false}
        title="Fatura Oluştur"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <FormItem
            label="Müşteri Adı"
            name={"CustomerName"}
            rules={[
              { required: true, message: "Burayı Doldurmak Zorunludur." },
            ]}
          >
            <Input placeholder="Müşteri adı" />
          </FormItem>
          <FormItem
            name={"CustomerTel"}
            label="Tel no"
            rules={[
              { required: true, message: "Burayı Doldurmak Zorunludur." },
            ]}
          >
            <Input placeholder="Tel no" maxLength={11} />
          </FormItem>
          <FormItem
            name={"CustomerSelect"}
            label="Müşteri Adı"
            rules={[
              { required: true, message: "Burayı Doldurmak Zorunludur." },
            ]}
          >
            <Select placeholder="Ödeme Yöntemi Seçiniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
            </Select>
          </FormItem>

          <Card>
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
              <b className="">540</b>
            </div>
            <div className="flex justify-end">
              <Button
                htmlType="submit"
                type="primary"
                onClick={(e) => setIsModalOpen(true)}
                className="mt-4"
              >
                Sipariş oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBill;
