import mouse from "../../../../../icons/МАУС.jpeg";
import image from "../../../../../icons/arrow.png";
import "./modal.css";

export function Modal(props) {
  return props.active ? (
    <div className={"modal"}>
      <div className={"mouse_description"}>Это {props.model}!</div>
      <div className={"mouse_photo"}>
        <img
          className={"mouse_pic"}
          src={mouse}
          alt="тут должна была быть мышб"
        />
      </div>
      <div className={"mouse_again"}>
        <button
          onClick={() => props.setActive(false)}
          className={"mouse_again_button"}
        >
          <img className={"try_again"} src={image} alt="" />
          Try again
        </button>
      </div>
    </div>
  ) : null;
}
