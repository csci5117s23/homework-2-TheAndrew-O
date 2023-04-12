import React, { useState, useEffect } from "react";
import ToDoItem from "./toDoItem";
import AddNewTodo from "./addItem";
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/router";
import SearchItems from "@/components/searchItems";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const ToDoList = ({ addTodo, toggleTodo, deleteTodo }) => {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const {data: session, status} = useSession()
  const router = useRouter()

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
      setTodos(data.reverse());
    };

    fetchData();
  }, []);

  useEffect(() => {
    if(!session) {
      router.push("/")
    }
  }, [session, router])

  if(session){
    return (<>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 bg-transparent">
      <div className="justify-center">
        <AddNewTodo />
        <SearchItems />
      </div>
      <div className="text-white overflow-hidden">
        <ul>
          {todos.map((todo, index) => {
            if (todo.email === session.user.email && todo.complete !== true) {
              return(
                <li key={todo._id} style={{paddingLeft:15}} className="bg-slate-900 group relative transition-shadow hover:shadow-xl hover:bg-yellow-500 rounded mb-3 mx-10">
                    <ToDoItem task={todo}/>
                </li>
              );
            } else {
              
            }
          })}
        </ul>
        </div>
    </div>
      </>);
  }
  else{
  
  }
};

export default ToDoList;
