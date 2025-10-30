export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="border border-gray-400 rounded-md p-3 mb-4 text-white cursor-pointer hover:bg-gray-700 transition"
    >
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
    </li>
  );
}
