import HandIcon from './HandIcon';
import './HandButton.css'

function HandButton({ value, onClick, className='' }) {
  const handleClick = () => onClick(value);
  const classNames = `HandButton ${className}`

  return (
    <button className={classNames} onClick={handleClick}>
      <HandIcon value={value} />
    </button>
  );
}

export default HandButton;
