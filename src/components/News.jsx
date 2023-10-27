import React, { useState } from "react";
import { Typography, Select, Col, Row, Avatar, Card } from "antd";
import moment from "moment";
import { useGetNewsQuery } from "../services/cryptoNews";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
const News = ({ simplified }) => {
  const { Text, Title } = Typography;
  const { Option } = Select;

  const [newsCategory, setnewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  const demoImageUrl =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  const onChange = (value) => {
    setnewsCategory(value);
  };

  const onSearch = (value) => {
    setnewsCategory(value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  if (!cryptoNews?.value) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={[24]}>
          <Select
            showSearch
            value={newsCategory}
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "Cryptocurrency",
                label: "Cryptocurrency",
              },
              ...(data?.data?.coins || []).map((currency) => ({
                value: currency.name,
                label: currency.name,
              })),
            ]}
          />
        </Col>
      )}

      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImageUrl}
                  alt=""
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImageUrl
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
