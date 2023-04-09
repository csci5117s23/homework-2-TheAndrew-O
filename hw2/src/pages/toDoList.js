import React, { useState, useEffect } from "react";
import ToDoItem from "./toDoItem";
import AddNewTodo from "./addItem";

const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"

const ToDoList = ({ addTodo, toggleTodo, deleteTodo }) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText.trim());
      setInputText("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT, {
        'method':'GET',
        'headers': {'x-apikey': API_KEY}
      });
      const data = await response.json();
      setTodos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
        <AddNewTodo />
      <ul>
        {todos.map((todo, index) => {
          return(
            <li key={todo._id} style={{paddingLeft:15}}>
                <ToDoItem task={todo}/>
            </li>
          );
        })}
      </ul>
      {/* <ul>
        {todos.map((todo, index) => (
          <ToDoItem
            key={todo._id}
            todo={todo.body}
            toggleTodo={() => toggleTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul> */}
    </div>
  );
};

export default ToDoList;
