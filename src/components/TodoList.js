import React from "react";
import "./TodoList.css";
const TodoItem = ({ todo, setTodos, todos }) => {
  const { text, date, completed, id } = todo;
  const removeTodo = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const completeHandler = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo-item">
      <div className="date-container">
        <h2>{date}</h2>
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>

      <div className="btn-container">
        <button
          className="btn-check"
          disabled={completed}
          onClick={(e) => completeHandler(e)}
        >
          <box-icon name="check"></box-icon>
        </button>
        <button className="btn-x" onClick={() => removeTodo()}>
          <box-icon name="x"></box-icon>
        </button>
      </div>
    </div>
  );
};

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
