import React from "react";

export default function TodoItem({ item, onCheck }) {
    const handleChange = () => {
      onCheck(item);
    };
  
    return (
      <label className="panel-block">
        <input
          type="checkbox"
          checked={item.done}
          onChange={handleChange}
        />
        <span
        >
          {item.text}
        </span>
      </label>
    );
  }