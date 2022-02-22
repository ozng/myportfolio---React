import "./social.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ozan-g%C3%BCrer-729872216/",
      icon: "assets/linkedin.png",
      userName: "Ozan Gürer",
      bgColor: "#0274B3",
    },
    {
      id: 2,
      name: "Git Hub",
      link: "https://github.com/ozng",
      icon: "assets/github.png",
      userName: "ozng",
      bgColor: "#222222",
    },
    {
      id: 3,
      name: "Twitter",
      link: "https://twitter.com/OzanGrer",
      icon: "assets/twitter.png",
      userName: "@OzanGrer",
      bgColor: "#1D9BF0",
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/ozangurer12/",
      icon: "assets/instagram.png",
      userName: "ozangurer12",
      bgColor: "#ED4960",
    },
  ];

  return (
    <div id="social" className="social">
      <h1>Social Media</h1>
      <ul className="container">
        {data.map((d) => (
          <li
            key={d.id}
            className="item"
            style={{ backgroundColor: d.bgColor }}
          >
            <a href={d.link} target="_blank">
              <img src={d.icon}></img>
              <div>
                <h2>{d.name}</h2>
                <span>{d.userName}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
