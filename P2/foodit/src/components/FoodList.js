import "./FoodList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id)
  const { imgUrl, title, calorie, content, createdAt } = item;

  return (
    <>
      <div className="FoodListItem">
        <img src={imgUrl} alt={title} />
        <div>{title}</div>
        <div>{calorie}</div>
        <div>{content}</div>
        <div>{formatDate(createdAt)}</div>
      </div>
      <button onClick={handleDeleteClick}>삭제</button>
    </>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul className="FoodList">
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
