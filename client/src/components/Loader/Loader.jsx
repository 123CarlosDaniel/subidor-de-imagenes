import loader from "./loader.svg";
import './Loader.css'

export default function Loader() {
  return (
    <div className="loader">
      <img src={loader} ></img>
    </div>
  );
}
