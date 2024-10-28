import "./Loader.css";

export default function ({ visible }: { visible: boolean }) {
  return (
    <div
      className={"relative m-auto " + (visible ? "visible" : "hidden")}
    ></div>
  );
}
