import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CyproCurrency from "./CyproCurrency";
import News from "./News";
import Loader from "./Loader";

const HomePage = () => {
  const { Title } = Typography;
  const { data, isFetching } = useGetCryptosQuery(10); // this is the count for number of records
  const gloabalStats = data?.data?.stats;
  // console.log(data);

  if (isFetching) return <Loader />;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrenices"
            value={gloabalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(gloabalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(gloabalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(gloabalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(gloabalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to={"/cryptocurrencies"}>Show More</Link>
        </Title>
      </div>
      <CyproCurrency simplified={true} />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={2} className="show-more">
          <Link to={"/cryptocurrencies"}>Show More</Link>
        </Title>
      </div>
      <News simplified={true} />
    </>
  );
};
export default HomePage;
