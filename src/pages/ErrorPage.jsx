import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="container">Error Occured!!!</div>
      <button onClick={navigateHandler}>Navigate to Home</button>
    </>
  );
};

export default ErrorPage;
