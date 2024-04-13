import { useState } from "react";

function FoodForm() {
  const [values, setValues] = useState({
    title: "",
    calorie: 0,
    content: "",
  });

  // const [title, setTitle] = useState('');
  // const [calorie, setCalorie] = useState(0);
  // const [content, setContent] = useState('');

  // const handleTitleChange = (e) => setTitle(e.target.value);

  // const handleCalorieChange = (e) => {
  //   const nextCalorie = Number(e.target.value) || 0;
  //   setCalorie(nextCalorie);
  // };

  // const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  };

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange} />
      <input
        type="number"
        name="calorie"
        value={values.calorie}
        onChange={handleChange}
      />
      <input name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default FoodForm;
