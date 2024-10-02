import React, { useEffect, useState } from "react";
import { Line, Pie } from "@ant-design/plots";
import Header from "../components/header";
import Custom from "../assets/custom.png";
import Money from "../assets/money.png";
import Products from "../assets/products.png";
import Sale from "../assets/sale.png";
import Statistic from "../components/statistic/Statistic";

const StatisticPage = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bill/get-all`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setBills(data);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    };

    getBills();
  }, []);

  const config = {
    data: bills,
    xField: "CustomerName", // Bu alan API yanıtından gelmelidir
    yField: "totalAmount", // Bu alan API yanıtından gelmelidir
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  const config_2 = {
    data: bills,
    angleField: "totalAmount", // Bu alan API yanıtından gelmelidir
    colorField: "CustomerName", // Bu alan API yanıtından gelmelidir
    innerRadius: 0.6,
    label: {
      text: " ",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
    // Renkleri belirlemek için eklenen özellik
    color: ["#ff4d4f", "#52c41a", "#1890ff", "#ffc53d", "#722ed1", "#fa8c16"],
    annotations: [
      {
        type: "text",
        style: {
          text: "AntV\nCharts",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 40,
          fontStyle: "bold",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="px-6 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-xl mt-12">
            Hoş Geldin <span className="text-green-700 text-2xl">Sado</span>
          </h2>
          <div className="statistic-cards md:gap-10 gap-4 my-10 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4">
            <Statistic src={Custom} title={"Müşterilerim"} num={7} />
            <Statistic src={Money} title={"Toplam Kazancım"} num={"9999.98₺"} />
            <Statistic src={Sale} title={"Toplam Satışlarım"} num={7} />
            <Statistic src={Products} title={"Ürünlerim"} num={7} />
          </div>
          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
            <div className="lg:w-1/2 lg:h-full h-72">
              {bills.length > 0 ? <Line {...config} /> : <p>Yükleniyor...</p>}
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              {bills.length > 0 ? <Pie {...config_2} /> : <p>Yükleniyor...</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
