import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import * as portfolioData from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("mobile");
  const [data, setData] = useState([]);

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
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
