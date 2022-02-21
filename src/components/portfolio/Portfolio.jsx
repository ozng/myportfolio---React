import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
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
        <div className="item">
          <img
            src="https://don16obqbay2c.cloudfront.net/wp-content/uploads/Ios-and-Android_Household_shopapp-1638886989.png"
            alt=""
          />
          <h3>Shop App</h3>
        </div>
        <div className="item">
          <img
            src="https://tacchistudios.com/wp-content/uploads/2016/12/pmp-ios-1.png"
            alt=""
          />
          <h3>Places App</h3>
        </div>
        <div className="item">
          <img
            src="https://www.appcoda.com/learnswiftui/images/core-data/swiftui-core-data-1.png"
            alt=""
          />
          <h3>To Do App</h3>
        </div>
      </div>
    </div>
  );
}
