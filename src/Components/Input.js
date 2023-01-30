import React from "react";

export default function Input({ onAdd }) {
    const [text, setText] = React.useState('');
  
    const handleChange = e => setText(e.target.value);
  
    const handleKeyDown = e => {
      if (e.key === 'Enter') {
        onAdd(text);
        setText('');
      }
    };
  
    return (
      <div className="panel-block">
        <input
          className="input"
          type="text"
          placeholder="Enter to add"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
  