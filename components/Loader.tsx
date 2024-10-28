import "./Loader.css";

export default function ({ visible }: { visible: boolean }) {
  return (
    <div
      className={"loader relative m-auto " + (visible ? "visible" : "hidden")}
    ></div>
  );
}
