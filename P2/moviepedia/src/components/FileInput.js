import { useEffect, useRef } from "react";

function FileInput({ name, value, onChange }) {
  // ref를 쓰면 직접 DOM 노드에 접근이 가능함
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  // useEffect(() => {
  //   if (inputRef.current) {
  //     console.log(inputRef);
  //   }
  // }, []);

  const handleClearButton = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearButton}>X</button>}
    </div>
  );
}

export default FileInput;
