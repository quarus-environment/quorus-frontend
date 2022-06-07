import "./components.css";
import { useState } from "react";
import image from "./icons/arrow.png";
import mouse from "./icons/МАУС.jpeg";

/*export const Header = () => {
  return (
    <div className={"header wrapper"}>
      <p>Quorus</p>
      <label className="switch">
        <input type="checkbox" />
      </label>
    </div>
  );
};*/

/*export const Main = () => {
  return (
    <div className="Main wrapper">
      <div className="Main__disription">
        <div className={"Main__discr__item1"}>
          <b>Tool that will catch your mouse meow</b>
        </div>
        <div className={"Main__discr__item2"}>
          Just uploud your picture and see the result
        </div>
        <button className={"main__description__item3"}>How it works?</button>
      </div>
      <ImageUploader />
    </div>
  );
};*/

/*
export const HowItWorks = () => {
  return (
    <div className={"HowItWorks wrapper Main"} id={"huy"}>
      <div className={""}>
        <ul className={"algos"}>
          <p>How it works?</p>
          <li>Just drag your image into the file uploader section</li>
          <li>Enjoy</li>
        </ul>
      </div>
      <div className={"someBlock"}>Видео</div>
    </div>
  );
};
*/

/*
export const ImageUploader = () => {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    console.log(files);
  }
  const [status, setStatus] = useState(false);

  return (
    <div className={"imageUploader"}>
      {drag ? (
        <div
          className={"dropArea"}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          Drop files
        </div>
      ) : (
        <div
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          <div className={"Upl"}>
            <b>Drag files to load them</b>
          </div>
        </div>
      )}
      <Modal
        active={status}
        setActive={setStatus}
        model={"Apple Magic Mouse 2"}
      />
      <button onClick={() => setStatus(true)}>попробуй жмать!</button>
    </div>
  );
};
*/

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
