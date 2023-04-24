import React, { useState } from "react";
import Item from "./Item";
function ShoppingList({ items }) {
  const [category, setCategory] = useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const filteredItems = category ? items.filter(item => item.category === category) : items;
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={category} onChange={handleChange} >
          <option value="">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;