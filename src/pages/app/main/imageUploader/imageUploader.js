import { useState } from "react";
import { Modal } from "./modal/modal";
import "./imageUploader.css";

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
        model="Apple Magic Mouse 2"
      />
      <button onClick={() => setStatus(true)} className="button-loader">
        попробуй жмать!
      </button>
    </div>
  );
};
