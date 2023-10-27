import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import News from "./components/News";
import CryptoCurrency from "./components/CyproCurrency";
import CryptoDetails from "./components/CryptoDetails";
import Exchange from "./components/Exchange";
import "./App.css";
import "antd/dist/reset.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/exchanges" element={<Exchange />} /> */}
              <Route path="/cryptocurrencies" element={<CryptoCurrency />} />
              <Route
                path="/cryptoDetails/:coinId"
                element={<CryptoDetails />}
              />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/"> Home</Link>
            <Link to="/exchanges"> Exchanges</Link>
            <Link to="/news"> News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
