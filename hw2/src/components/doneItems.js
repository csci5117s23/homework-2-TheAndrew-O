import React, { useState, useEffect } from "react";
import ToDoItem from "@/pages/toDoItem";
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/router";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const DoneItems = () => {

  const [todos, setTodos] = useState([]);
  const {data: session, status} = useSession()
  const router = useRouter()


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
      <div className="pt-10">
        <ul>
          {todos.map((todo, index) => {
            if (todo.email === session.user.email && todo.complete === true) {
              return(
                <li key={todo._id} style={{ textDecoration: todo.complete ? "line-through" : "none", paddingLeft: 15}} className=" bg-yellow-600 group relative transition-shadow hover:shadow-xl hover:bg-slate-900 rounded mb-3 mx-10">
                    <ToDoItem task={todo}/>
                </li>
              );
            } else {
              
            }
          })}
        </ul>
      </div>
      </>);
  }
  else{
  
  }
};

export default DoneItems;
