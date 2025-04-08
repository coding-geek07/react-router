import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import "../App.css";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
