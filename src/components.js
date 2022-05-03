import "./components.css";
import { useState } from "react";
import axios from "axios";

// todo: разбей на компоненты пж пофайлово
export const Header = () => {
  return (
    <div className={"header wrapper"}>
      <p>Quorus</p>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export const Main = () => {
  return (
    <div className={"main wrapper"}>
      <div className={"Main__disription"}>
        <div className={"main__description__item-1"}>
          <b>Tool that will catch your mouse meow</b>
        </div>
        <div className={"main__description__item-2"}>
          Just uploud your picture and see the result
        </div>
        <button className={"main__description__item-3"}>How it works?</button>
      </div>
      <ImageUploader />
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <div className={"how-it-works wrapper main"}>
      <div className={""}>
        <ul className={"algos"}>
          <p>How it works?</p>
          <li>Just drag your image into the file uploader section</li>
          <li>Enjoy</li>
        </ul>
      </div>
      <div className={"some-block"}>Видео</div>
    </div>
  );
};

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
    setDrag(false);
    axios.post("http://127.0.0.1:5000/", files).then((res) => {
      console.log(res);
      console.log(files);
    });
  }

  return (
    <div>
      {drag ? (
        <div
          className={"drop-area"}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          <p>Drop files</p>
        </div>
      ) : (
        <div
          className={"drop-area"}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          <p>Drag files to load them</p>
        </div>
      )}
    </div>
  );
};
