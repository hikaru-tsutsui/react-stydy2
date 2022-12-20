import { useState, useCallback, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);

  const onClickButton = () => {
    setOpen(!open);
  };
  //

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}></input>
      <br />
      <br />
      <button onClick={onClickButton}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
    </div>
  );
}
