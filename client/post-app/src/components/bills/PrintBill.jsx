import { Button, Modal } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div>
      <Modal
        width={750}
        footer={false}
        title="Fatura Yazdır"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white p-8">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">Logo</h2>
              </div>
              <div className="bill-details">
                <div className=" grid sm:grid-cols-4 grid-cols-3 gap-4">
                  <div className="text-1xl text-slate-500 ">
                    <p className="font-bold  text-slate-700 ">
                      Fatura Detayı:{" "}
                    </p>
                    <p>Türkiye İstanbul</p>
                    <p>Özgür Ekinci</p>
                  </div>

                  <div className="text-1xl sm:block hidden text-slate-500 ">
                    <p className="font-bold  text-slate-700 ">
                      Fatura Detayı:{" "}
                    </p>
                    <p>Türkiye İstanbul</p>
                    <p>Özgür Ekinci</p>
                  </div>

                  <div className="text-1xl text-slate-500 ">
                    <p className="font-bold  text-slate-700 ">
                      Fatura Detayı:{" "}
                    </p>
                    <p>Türkiye İstanbul</p>
                    <p>Özgür Ekinci</p>
                  </div>
                  <div className="text-1xl text-slate-500 ">
                    <p className="font-bold  text-slate-700 ">
                      Fatura Detayı:{" "}
                    </p>
                    <p>Türkiye İstanbul</p>
                    <p>Özgür Ekinci</p>
                  </div>
                </div>
              </div>

              <div className="bill-table-area">
                <table className="min-w-full divide-y mt-4 divide-slate-500 overflow-hidden">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-normal hidden sm:table-cell sm:pl-6 md:pl-0 text-slate-700"
                      >
                        Görsel
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal  sm:table-cell sm:pl-6 md:pl-0 text-slate-700"
                      >
                        Başlık
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal sm:table-cell sm:pl-6 md:pl-0 text-slate-700"
                      >
                        Fiyat
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-center text-sm font-normal sm:table-cell sm:pl-6 md:pl-0 text-slate-700"
                      >
                        Adet
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-end text-sm font-normal sm:table-cell sm:pl-6 md:pl-0 text-slate-700"
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 pr-3  sm:block hidden ">
                        <img
                          className="w-12 h-12 object-cover"
                          src="https://productimages.hepsiburada.net/s/83/424-600/110000025591953.jpg/format:webp"
                          alt=""
                        />
                      </td>
                      <td className="py-4 pr-3 text-center">
                        <span className="font-medium ">Kalem</span>
                      </td>
                      <td className="py-4 pr-3 text-center">
                        <span>27₺</span>
                      </td>
                      <td className="py-4 pr-3 text-center">
                        <span>4</span>
                      </td>
                      <td className="py-4 pr-3 text-end">
                        <span>485₺</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-right pt-6" colSpan={4} scope="row">
                        <span className="font-normal text-slate-700">
                          Ara Toplam:
                        </span>
                      </th>
                      <th className="text-right pt-6" scope="row">
                        <span className="font-normal text-slate-700">
                          45.99$
                        </span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-right pt-4" colSpan={4} scope="row">
                        <span className="font-normal text-slate-700">KDV:</span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-red-700">45.99$</span>
                      </th>
                    </tr>
                    <tr>
                      <th className="text-right pt-4" colSpan={4} scope="row">
                        <span className="font-normal text-slate-700">
                          Toplam
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">
                          45.99$
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className="py-9">
                  <div className="border-t pt-9 border-slate-300">
                    <p className="font-light text-slate-700">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos voluptas qui rem velit et possimus maiores
                      consequuntur eligendi, beatae dolore temporibus nemo
                      veniam nam aliquam quas quae. Dicta, natus ducimus!
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
          <Button type="primary" size="large">
            Yazdır
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default PrintBill;
