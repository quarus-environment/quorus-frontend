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
          <b className={"how-it-works_title"}>How it works?</b>
          <ul className={"how-it-works_list"}>
            <li className={"how-it-works_list_item"}>You distort the photo</li>
            <li className={"how-it-works_list_item"}>A trained neural network processes it</li>
            <li className={"how-it-works_list_item"}>Chooses the most accurate characteristics</li>
            <li className={"how-it-works_list_item"}>And gives all the data about the mouse</li>
          </ul>
        </ul>
      </div>
      <div className={"some-block"}><div>Видео</div></div>
    </div>
  );
};

export const ImageUploader = () => {
  const [drag, setDrag] = useState(false);
  const [image, setImage] = useState("");

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
    const formData = new FormData();
    formData.append("file", files?.[0]);
    setDrag(false);
    axios.post("http://127.0.0.1:5000/", formData).then((res) => {
      console.log(res);
      setImage("http://127.0.0.1:5000/uploaded_files/" + res.data);
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
      <img src={image} alt={"q23"} />
    </div>
  );
};
