"use client";
import { Table } from "antd";
import React from "react";

const page = () => {
  const tableData = localStorage.getItem("Expenses");
  console.log(tableData);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
    },
  ];

  return (
    <>
      <div className="h-[100vh] w-auto flex items-center justify-center">
        <div className="bg-white">
          <Table
            className="w-[600px]"
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};

export default page;
