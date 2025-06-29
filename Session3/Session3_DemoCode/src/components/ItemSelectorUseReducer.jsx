import React, { useReducer } from "react";

const initialItems = [
  { id: 1, name: "Apple", selected: false },
  { id: 2, name: "Banana", selected: false },
  { id: 3, name: "Cherry", selected: false },
];

const initialState = {
  items: initialItems,
  selectedCount: 0,
};

function itemReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_ITEM": {
      const updatedItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, selected: !item.selected }
          : item
      );
      const selectedCount = updatedItems.filter(i => i.selected).length;

      return { items: updatedItems, selectedCount };
    }
    default:
      return state;
  }
}

export default function ItemSelectorUseReducer() {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <div>
      <h2>Selected: {state.selectedCount}</h2>
      {state.items.map(item => (
        <label key={item.id}>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => dispatch({ type: "TOGGLE_ITEM", payload: item.id })}
          />
          {item.name}
        </label>
      ))}
    </div>
  );
}
