import React from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {

  return (
      <div className="todo-list">
        <h3>To Do List</h3>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
      </div>
  )    
}

export default App;
