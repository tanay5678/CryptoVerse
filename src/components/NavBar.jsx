import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import EthIcon from "../images/eth.png";
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setscreenSize] = useState(null);

  useEffect(() => {
    const handleSize = () => setscreenSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    return () => {
      if (screenSize > 768) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    };
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={EthIcon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Button
        className="menu-control-container"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <MenuOutlined />{" "}
      </Button>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          {/* <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item> */}
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
