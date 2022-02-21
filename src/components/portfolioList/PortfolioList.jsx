import "./portfolioList.scss";

export default function componentName({ title, id, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
      key={id}
    >
      {title}
    </li>
  );
}
