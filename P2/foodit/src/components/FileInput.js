import { useRef, useState } from 'react';
import { useEffect } from 'react';

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  /**
   *  아래 코드를 참고해서 미리보기 기능을 만들어주세요!
   *
   *  ObjectURL 만들기
   *  const objectURL = URL.createObjectURL(file);
   *
   *  ObjectURL 해제하기
   *  URL.revokeObjectURL(objectURL);
   */

  useEffect(() => {
    if(!value) return

    const nextPreview = URL.createObjectURL(value)
    setPreview(nextPreview)

    return () => {
      setPreview()
      URL.revokeObjectURL(nextPreview)
    }
  }, [value])

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input type="file" onChange={handleChange} ref={inputRef} />
      <button type="button" onClick={handleClearClick}>
        X
      </button>
    </div>
  );
}

export default FileInput;
