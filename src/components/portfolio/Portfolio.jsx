import "./portfolio.scss";
import { useState, useEffect } from "react";

import * as portfolioData from "../../data";
import PortfolioList from "../portfolioList/PortfolioList";
import Detail from "./Detail/Detail";

export default function Portfolio() {
  const [selected, setSelected] = useState("mobile");
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [display, setDisplay] = useState("none");

  const { featuredPortfolio, mobilePortfolio, webPortfolio } = portfolioData;

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const list = [
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "web",
      title: "Web App",
    },
  ];

  const handleHide = () => {
    setDisplay("none");
    setDetailData([]);
  };

  const handleShow = (data) => {
    setDetailData(data);
    setDisplay("flex");
  };

  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" onClick={() => handleShow(d)}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <Detail data={detailData} display={display} onHide={handleHide} />
    </div>
  );
}
