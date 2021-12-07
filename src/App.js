import React from "react";
import "./app.css";
import Home from "./components/home/Home";
import SignIn from "./components/SignIn/SignIn";
import Products from "./components/products/Product";
import Orders from "./components/Orders/Orders";
import Transaction from "./components/transactions/Transaction";
import DeliveryBoy from "./components/Deliveryboy/DeliveryBoy";
import FeedBack from "./components/FeedBack/FeedBack";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <SideBar />
      <div className="others">
        <Routes>
          {/* <Route path='/signin' element={<SignIn/>}/> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/delivery-boy" element={<DeliveryBoy />} />
          <Route path="feedback" element={<FeedBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
