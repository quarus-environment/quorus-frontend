import mouse from "../../../../../icons/МАУС.jpeg";
import image from "../../../../../icons/arrow.png";
import "./modal.css";

export function Modal({ active, setActive, model, mouseLink }) {
  return active ? (
    <div className="modal" onClick={() => setActive(false)}>
      <p className="mouse_description">Это {model}!</p>
      <div className="mouse_photo">
        <img
          className="mouse_pic"
          src={mouseLink}
          alt="тут должна была быть мышб"
        />
      </div>
    </div>
  ) : null;
}
