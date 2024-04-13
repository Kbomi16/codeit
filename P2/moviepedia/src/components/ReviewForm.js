import { useState } from 'react';
import './ReviewForm.css';

function ReviewForm() {
  const [values, setValues] = useState({
    title: '',
    rating:0,
    content: ''
  })

  // const [title, setTitle] = useState('');
  // const [rating, setRating] = useState(0);
  // const [content, setContent] = useState('');

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleRatingChange = (e) => {
  //   const nextRating = Number(e.target.value);
  //   setRating(nextRating);
  // };

  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value // name 값으로 프로퍼티명을 지정하고 해당 값을 지정할 수 있음
    }))
  }

  const handleSubmit = (e) => {
    // form기본동작은 submit 버튼을 눌렀을 때 입력 폼 값과 get리퀘스트를 보냄 -> 기본동작 막아야함
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange} />
      <input type="number" name="rating" value={values.rating} onChange={handleChange} />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
