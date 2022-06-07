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
