import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState("");

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

  // 파일 선택할 때마다 미리보기 주소를 바꿈
  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview()
      URL.revokeObjectURL(nextPreview)
    }
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input type="file" accept="image/png, image/jpeg" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearButton}>X</button>}
    </div>
  );
}

export default FileInput;
