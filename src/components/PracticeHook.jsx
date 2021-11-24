import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  useEffect,
  useState,
  useContext,
  useReducer,
  useRef,
} from "react/cjs/react.development";

const PracticeHook = () => {
  let [name, setName] = useState("");
  //   let [RenderCount, setRenderCount] = useState(0);
  //   useEffect(() => {
  //     setRenderCount((RenderCount) => RenderCount + 1);
  //   });

  //   let RenderCount = useRef(1);
  //   console.log(RenderCount);

  //   useEffect(() => {
  //     RenderCount.current = RenderCount.current + 1;
  //   });

  let inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
    // console.log(inputRef.current.focus());
  };
  return (
    <>
      <input
        type="text"
        placeholder="Type your name"
        onChange={(e) => setName(e.target.value)}
        style={{ marginTop: "100px" }}
        value={name}
        ref={inputRef}
      />
      {/* <div>My Name is {name}</div>
      <div>I rendered {RenderCount.current} times</div> */}
      <button onClick={handleClick}>ConsoleLog</button>
    </>
  );
};

export default PracticeHook;
