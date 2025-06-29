import React, { useState } from "react";

const initialItems = [
  { id: 1, name: "Apple", selected: false },
  { id: 2, name: "Banana", selected: false },
  { id: 3, name: "Cherry", selected: false },
];

export default function ItemSelectorUseState() {
  const [items, setItems] = useState(initialItems);
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleItem = (id) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    const count = updated.filter(i => i.selected).length;
    setItems(updated);
    setSelectedCount(count);
  };

  return (
    <div>
      <h2>Selected: {selectedCount}</h2>
      {items.map(item => (
        <label key={item.id}>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => toggleItem(item.id)}
          />
          {item.name}
        </label>
      ))}
    </div>
  );
}