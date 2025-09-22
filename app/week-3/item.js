const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
    </li>
  );
};

export default Item;
