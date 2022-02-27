import "./detail.scss";
import { Close } from "@material-ui/icons";

export default function Detail({ display, data, onHide }) {
  return (
    <div style={{ display: display }} className="detailContainer">
      <div className="btnImgContainer">
        <img src={data.img}></img>
        <Close className="btn" onClick={onHide} />
      </div>
    </div>
  );
}
