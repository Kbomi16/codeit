import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);


// const WINS = {
//   rock: "scissor",
//   scissor: "paper",
//   paper: "rock",
// };

// function getResult(left, right) {
//   if (WINS[left] === right) return "승리";
//   else if (left === WINS[right]) return "패배";
//   return "무승부";
// }

// function handleClick() {
//   console.log("가위바위보!");
// }

// const me = "rock";
// const other = "scissor";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <App />
//     <h1 id="title">가위바위보</h1>
//     <h2>{getResult(me, other)}</h2>
//     <button class="hand" onClick={handleClick}>
//       가위
//     </button>
//     <button class="hand" onClick={handleClick}>
//       바위
//     </button>
//     <button class="hand" onClick={handleClick}>
//       보
//     </button>
//   </>
// );

