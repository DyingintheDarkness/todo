import React from "react";
import "boxicons";
import uniqid from "uniqid";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const date = new Date();
  const today = `${date.getDate()} ${
    date.getMonth() === 1 ? "January" : monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, date: today, completed: false, id: uniqid() },
    ]);
    setInputText("");
  };

  return (
    <>
      <form>
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button type="submit" onClick={submitHandler}>
          <box-icon type="solid" name="add-to-queue"></box-icon>
        </button>
      </form>
    </>
  );
};

export default Form;
