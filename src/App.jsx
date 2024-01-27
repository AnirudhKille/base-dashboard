import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Header />} />
      </Routes>
    </>
  );
};

export default App;
