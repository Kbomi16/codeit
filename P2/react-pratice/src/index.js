import React from "react";
import ReactDOM from "react-dom/client";

const product = "MacBook";
const model = "Air";
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png";

function handleClick(e) {
  alert("곧 도착합니다!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>{product + " " + model} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진" />
    <button onClick={handleClick}>확인</button>
  </>
);

