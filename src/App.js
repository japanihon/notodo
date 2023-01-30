import React from "react";
import { createRoot } from "react-dom/client";

import Todo from "./Components/Todo";


export default function App() {
  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

const domNode = document.getElementById('root');
createRoot(domNode);


