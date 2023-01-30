import React from "react";

export default function Filter({ value, onChange }) {
    const handleClick = (key, e) => {
      e.preventDefault();
      onChange(key);
    };
  
    return (
      <div className="panel-tabs">
        <button
          onClick={handleClick.bind(null, 'ALL')}
        >All</button>
        <button
          onClick={handleClick.bind(null, 'TODO')}
        > ToDo </button>
        <button
          onClick={handleClick.bind(null, 'DONE')}
        > Done </button>
      </div>
    );
  }