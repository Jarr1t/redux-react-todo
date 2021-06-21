import React from 'react';
import './App.css';
import Input from './components/Input'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="App">
      <h1>ToDo List!</h1>
      <Input/>
      <TaskList/>
    </div>
  );
}

export default App;
