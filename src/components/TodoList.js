import React from "react";
const TodoItem = ({ todo, setTodos, todos }) => {
  const { text, date, completed, id } = todo;
  const removeTodo = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const completeHandler = () => {
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
    console.log(completed);
  };
  return (
    <div className="todo-item">
      <div className="date-time">{date}</div>
      <div className="text-container">
        {text}
        {completed ? " I am true" : "I am false"}
      </div>
      <div className="btn-container">
        <button className="check">
          <box-icon name="check" onClick={() => completeHandler()}></box-icon>
        </button>
        <button className="cross" onClick={() => removeTodo()}>
          <box-icon name="x"></box-icon>
        </button>
      </div>
    </div>
  );
};

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
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
    </>
  );
};

export default TodoList;
