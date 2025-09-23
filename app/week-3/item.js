const Item = ({ name, quantity, category }) => {
  return (
    <li className="border border-gray-400 rounded-md p-3 mb-4 text-white">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
    </li>
  );
};

export default Item;
