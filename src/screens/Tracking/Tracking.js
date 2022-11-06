import React from "react";
import DropDown from "../../components/Dropdown/Dropdown";
import Searchbar from "../../components/Searchbar/Searchbar";
import Table from "../../components/Table/Table";
import "./style.css";

const Tracking = () => {
  const data1 = [
    { id: 0, name: "On" },
    { id: 1, name: "Off" },
  ];

  const data2 = [
    { id: 0, name: "In Route" },
    { id: 1, name: "In Process" },
  ];

  const titles = [
    { id: 0, name: "Employee" },
    { id: 1, name: "Destination" },
    { id: 2, name: "Status" },
    { id: 3, name: "Start Date" },
    { id: 4, name: "Delivery Date" },
    { id: 5, name: "Tracking" },
    { id: 6, name: "Order Details" },
  ];

  const data = [
    {
      id: 0,
      employee: "Alex Agran",
      destination: "Off",
      status: "In Route",
      start: "2022-03-17",
      delivery: "2022-03-14",
      tracking: "UPS 03487DE23245",
      details: "Details",
    },
    {
      id: 1,
      employee: "John Smitty",
      destination: "On",
      status: "In Route",
      start: "2022-03-17",
      delivery: "2022-03-14",
      tracking: "UPS 03487DE23245",
      details: "Details",
    },
    {
      id: 2,
      employee: "Carrie Johnson",
      destination: "Off",
      status: "In Process",
      start: "2022-03-17",
      delivery: "2022-03-14",
      tracking: "UPS 03487DE23245",
      details: "Details",
    },
    {
      id: 3,
      employee: "Larry Jones",
      destination: "On",
      status: "In Process",
      start: "2022-03-17",
      delivery: "2022-03-31",
      tracking: "UPS 03487DE23245",
      details: "Details",
    },
    {
      id: 4,
      employee: "Calvin Johas",
      destination: "Off",
      status: "In Route",
      start: "2022-03-17",
      delivery: "2022-03-31",
      tracking: "none",
      details: "Details",
    },
    {
      id: 5,
      employee: "Alex Agran",
      destination: "Off",
      status: "In Route",
      start: "2022-03-17",
      delivery: "2022-03-31",
      tracking: "none",
      details: "Details",
    },
  ];

  return (
    <div className="main">
      <h4>Tracking</h4>
      <h2>Order Tracking</h2>

      <div className="inputs">
        <DropDown label="Destination" data={data1} />
        <DropDown label="Status Selector" data={data2} />
        <div style={{ width: "100%" }}>
          <Searchbar />
        </div>
      </div>

      <Table titles={titles} data={data} />
    </div>
  );
};

export default Tracking;
