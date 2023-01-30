import React from "react";

import Input from '../Components/Input'

import Filter from '../Components/Filter'

import TodoItem from '../Components/TodoItem'

const getKey = () => Math.random().toString(32).substring(2);

export default function Todo() {
  const [items, setItems] = React.useState([]);
  const [filter, setFilter] = React.useState('ALL');

  const handleAdd = text => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = value => setFilter(value);

  const displayItems = items.filter(item => {
    if (item === 'ALL') return true;
    if (item === 'TODO') return !item.done;
    if (item === 'DONE') return item.done;
    else {return item}
  });

  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        ⚛️ React ToDo
      </div>
      <Input onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayItems.map(item => (
        <TodoItem
          key={item.text}
          item={item}
          onCheck={handleCheck}
         />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
    </div>
  );
}