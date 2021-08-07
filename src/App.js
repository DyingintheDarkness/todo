import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header />
      <section>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <TodoList inputText={inputText} todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
}

export default App;
