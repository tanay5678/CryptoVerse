import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Col, Row, Input, Card } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const CyproCurrency = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterData = cryptoList?.data?.coins?.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    setcryptos(filterData);
  }, [cryptoList, search]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card">
            <Link to={`/cryptoDetails/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img src={currency.iconUrl} className="crypto-image" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CyproCurrency;
