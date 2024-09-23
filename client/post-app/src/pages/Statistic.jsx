import React from "react";
import { Line, Pie } from "@ant-design/plots";
import Header from "../components/header";
import Custom from "../assets/custom.png";
import Money from "../assets/money.png";
import Products from "../assets/products.png";
import Sale from "../assets/sale.png";
import Statistic from "../components/statistic/Statistic";

const StatisticPage = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 50 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];
  const config = {
    data,
    xField: "year",
    yField: "value",
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
    data: [
      { type: "分类一", value: 27 },
      { type: "分类二", value: 25 },
      { type: "分类三", value: 18 },
      { type: "分类四", value: 15 },
      { type: "分类五", value: 10 },
      { type: "其他", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6,
    label: {
      text: "value",
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
      <div className="px-6  pb-20">
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
          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center ">
            {" "}
            <div className="lg:w-1/2 lg:h-full h-72">
              <Line {...config} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...config_2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
