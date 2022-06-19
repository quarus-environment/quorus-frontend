import "./main.css";
import { ImageUploader } from "./imageUploader/imageUploader";

export const Main = () => {
  return (
    <div className="main wrapper">
      <div className="main__description">
        <div className="main__description__item1">
          <b>Tool that will catch your mouse meow</b>
        </div>
        <div className="main__description__item2">
          Just upload your picture and see the result
        </div>
        <a href="#huy">
          <button className="main__description__item3 main-button">
            How it works?
          </button>
        </a>
      </div>
      <ImageUploader />
    </div>
  );
};
