import React, { useState, useEffect } from "react";
import ToDoItem from "@/pages/toDoItem";
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/router";

const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"

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
      setTodos(data);
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
      <div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            if (todo.email === session.user.email && todo.complete === true) {
              return(
                <li key={todo._id} style={{paddingLeft:15}}>
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