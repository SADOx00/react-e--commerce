import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import Responsive from "./images/responsive.svg";
import Custom from "./images/customer.svg";
import Admin from "./images/admin.svg";
import Statistic from "./images/statistic.svg";
import FormItem from "antd/es/form/FormItem";

const Login = () => {
  return (
    <main className="h-screen">
      <article className="flex justify-between h-full">
        <section className="left relative xl:w-2/6 w-full px-10 xl:px-20 flex min-w-[400px] flex-col h-full justify-center">
          <h1 className="text-center text-5xl font-bold mb-3">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Lütfen Email Giriniz!",
                },
              ]}
              label="Email"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Lütfen Şifrenizi Giriniz!",
                },
              ]}
              label="Şifre"
            >
              <Input.Password />
            </Form.Item>
            <FormItem name={"remembre"}>
              <div className="flex items-center justify-between">
                <Checkbox>Remember Me</Checkbox>
                <Link>Şifrenimi Unuttun?</Link>
              </div>
            </FormItem>

            <Form.Item>
              <button class="m-auto h-2 animated-button">
                <svg
                  viewBox="0 0 24 24"
                  class="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text text-yellow-700">Giriş Yap</span>
                <span class="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  class="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-10 bottom-10 ">
            Hesabınız Yok Mu?{" "}
            <span className="text-blue-700 ml-3">
              <Link to={"/register"}>Hemen Kaydolun.</Link>
            </span>
          </div>
        </section>
        <section className="right md:w-1/2  lg:flex  hidden items-center bg-[#6c63ff] min-w-[800px] xl:w-4/6 lg:w-3/5">
          <aside className="w-full  ">
            <Carousel autoplay>
              <div className="!flex flex-col p-5 items-center justify-center h-full mb-10">
                <img
                  className="w-[600px] h-[500px]"
                  src={Responsive}
                  alt="responsive"
                />
                <h3 className="text-center text-4xl text-white font-bold">
                  Responsive
                </h3>
                <p
                  className="mt-5 text-center text-white
                 text-4xl"
                >
                  Tüm Cihaz Boyutlarıyla Uyumluluk
                </p>
              </div>
              <div className="!flex flex-col p-5 items-center justify-center h-full mb-10">
                <img
                  className="w-[600px] h-[500px]"
                  src={Custom}
                  alt="responsive"
                />
                <h3 className="text-center text-4xl text-white font-bold">
                  Müşteri Hizmeti
                </h3>
                <p
                  className="mt-5 text-center text-white
                 text-4xl"
                >
                  Herkese Hizmet Etmek Bizim İşimiz
                </p>
              </div>
              <div className="!flex flex-col p-5 items-center justify-center h-full mb-10">
                <img
                  className="w-[60
                  0px] h-[500px]"
                  src={Admin}
                  alt="responsive"
                />
                <h3 className="text-center text-4xl text-white font-bold">
                  Admin Paneli
                </h3>
                <p
                  className="mt-5 text-center text-white
                 text-4xl"
                >
                  İstedğiniz Şekilde Ürünlerinizi Düzenleyin
                </p>
              </div>
              <div className="!flex flex-col p-5 items-center justify-center h-full mb-10">
                <img
                  className="w-[600px] h-[500px]"
                  src={Statistic}
                  alt="responsive"
                />
                <h3 className="text-center text-4xl text-white font-bold">
                  İstatistik
                </h3>
                <p
                  className="mt-5 text-center text-white
                 text-4xl"
                >
                  İstatistiklerle Daha İyi Bir Anlatım
                </p>
              </div>
            </Carousel>
          </aside>
        </section>
      </article>
    </main>
  );
};

export default Login;
