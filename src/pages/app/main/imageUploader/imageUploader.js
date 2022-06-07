import { useState } from "react";
import { Modal } from "./modal/modal";
import "./imageUploader.css";
import axios from "axios";

export const ImageUploader = () => {
  const [drag, setDrag] = useState(false);

  const [image, setImage] = useState(
    "https://web-zoopark.ru/wp-content/uploads/2018/07/4-128.jpg"
  );

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
      setImage("http://127.0.0.1:5000/uploaded_files/" + res.data);
      setStatus(true);
    });
  }
  const [status, setStatus] = useState(false);

  if (drag) {
    return (
      <div
        className="image-uploader"
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragStartHandler(e)}
        onDrop={(e) => onDropHandler(e)}
      >
        <div className="drop-area">Drop files</div>
        <Modal
          active={status}
          setActive={setStatus}
          model="Apple Magic Mouse 2"
        />
      </div>
    );
  }

  return (
    <div
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      className="image-uploader"
    >
      <b>Drag files to load them</b>
      <Modal
        active={status}
        setActive={setStatus}
        model="Apple"
        mouseLink={image}
      />
      <button onClick={() => setStatus(true)} className="button-loader">
        попробуй жмать!
      </button>
    </div>
  );
};
