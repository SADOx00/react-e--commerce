import { Button, Modal } from "antd";
import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <h1>Yazdırılacak İçerik</h1>
        <p>Bu içerik yazdırılacaktır.</p>
      </div>
    );
  }
}

const PrintBill = ({ customer, isModalOpen, setIsModalOpen }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => setIsModalOpen(false), // Yazdırma tamamlandıktan sonra modalı kapat
  });

  useEffect(() => {
    if (isModalOpen) {
      // Modal açıldığında içeriği kontrol et
      if (componentRef.current) {
        handlePrint(); // Modal açıldığında yazdırma işlemini başlat
      }
    }
  }, [isModalOpen]); // Modal açıldığında çalışır

  return (
    <div>
      <Modal
        width={750}
        footer={false}
        title="Fatura Yazdır"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <section ref={componentRef} className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white p-8">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">Logo</h2>
              </div>
              <div className="bill-details">
                <div className="grid sm:grid-cols-4 grid-cols-3 gap-4">
                  <div className="text-1xl text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                    <p>Türkiye İstanbul</p>
                    <p>{customer.CustomerName}</p>
                  </div>
                </div>
              </div>

              <div className="bill-table-area">
                <table className="min-w-full divide-y mt-4 divide-slate-500 overflow-hidden">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 text-left text-sm font-normal text-slate-700"
                      >
                        Görsel
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-center text-sm font-normal text-slate-700"
                      >
                        Başlık
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-center text-sm font-normal text-slate-700"
                      >
                        Fiyat
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-center text-sm font-normal text-slate-700"
                      >
                        Adet
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-end text-sm font-normal text-slate-700"
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customer.cardItems?.length ? (
                      customer.cardItems.map((item, index) => (
                        <tr key={index}>
                          <td className="py-4 pr-3 sm:block hidden">
                            <img
                              className="w-12 h-12 object-cover"
                              src={item.img}
                              alt=""
                            />
                          </td>
                          <td className="py-4 pr-3 text-center">
                            <span className="font-medium">{item.title}</span>
                          </td>
                          <td className="py-4 pr-3 text-center">
                            <span>{item.price}₺</span>
                          </td>
                          <td className="py-4 pr-3 text-center">
                            <span>{item.quantity}</span>
                          </td>
                          <td className="py-4 pr-3 text-end">
                            <span>{item.total}₺</span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          Hiçbir ürün bulunamadı.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
          <Button onClick={handlePrint} type="primary" size="large">
            Yazdır
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PrintBill;
