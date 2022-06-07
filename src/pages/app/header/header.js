import "./header.css";

export const Header = () => {
  return (
    <div className="header wrapper">
      <p>Quorus</p>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
