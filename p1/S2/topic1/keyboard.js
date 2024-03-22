/**
 * [키보드 이벤트]
 *
 * > KeyboardEvent.type
 * keydown: 키보드 버튼을 누른 순간
 * keypress: 키보드 버튼을 누른 순간
 * keyup: 키보드 버튼을 눌렀다 뗀 순간
 *
 * > KeyboardEvent.key
 * : 이벤트가 발생한 버튼의 값
 *
 * > KeyboardEvent.code
 * : 이벤트가 발생한 버튼의 키보드에서 물리적인 위치
 */

const myInput = document.querySelector("#my-input");
const key = document.querySelector("#key");
const code = document.querySelector("#code");

function onkeyEvent(e) {
  const eventBtn = document.querySelector(`#${e.type}`);
  eventBtn.classList.add("check");

  const el = document.querySelector(`#${e.code}`);
  el.classList.add("on");

  if (e.type === "keyup") {
    el.classList.remove("on");
  } else if (e.type === "keydown") {
    key.textContent = `key: ${e.key}`;
    code.textContent = `code: ${e.code}`;
  }

  setTimeout(function () {
    eventBtn.className = "event";
  }, 300);
}

myInput.addEventListener("keydown", onkeyEvent);
myInput.addEventListener("keypress", onkeyEvent);
myInput.addEventListener("keyup", onkeyEvent);
