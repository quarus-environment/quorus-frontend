import "./main.css";
import { ImageUploader } from "./imageUploader/imageUploader";

export const Main = () => {
  return (
    <div className="Main wrapper">
      <div className="Main__disription">
        <div className={"Main__discr__item1"}>
          <b>Tool that will catch your mouse meow</b>
        </div>
        <div className={"Main__discr__item2"}>
          Just upload your picture and see the result
        </div>
        <button className={"main__description__item3"}>How it works?</button>
      </div>
      <ImageUploader />
    </div>
  );
};
