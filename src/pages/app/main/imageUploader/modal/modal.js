import "./modal.css";

export function Modal({ active, setActive, model, mouseLink }) {
  return active ? (
    <div className="modal" onClick={() => setActive(false)}>
      <p
        className="mouse_description"
        style={{ fontWeight: "bold", fontSize: "24px" }}
      >
        Это {model}!
      </p>
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
