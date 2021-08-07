import React from "react";
import "boxicons";
import uniqid from "uniqid";
import "./Form.css";

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
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, date: today, completed: false, id: uniqid() },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="form-container">
      <div className="input-container">
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          placeholder="Add New Task..."
        />
        <button type="submit" class="btn-submit" onClick={submitHandler}>
          <box-icon
            type="solid"
            name="add-to-queue"
            className="add-todo"
          ></box-icon>
        </button>
      </div>
    </div>
  );
};

export default Form;
