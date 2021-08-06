import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList'
import React, {useState} from 'react';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList inputText={inputText} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
