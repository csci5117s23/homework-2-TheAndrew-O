import React, { useState, useEffect } from "react";
import ToDoItem from "@/pages/toDoItem";
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/router";

const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"

const SearchItems = () => {

  const [todos, setTodos] = useState([]);
  const {data: session, status} = useSession()
  const router = useRouter()
  const [query, setQuery] = useState("")

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
      <div className="pt-20 justify-items-center">
        <div className="flex justify-center text-center">
            <input
                type="text"
                style={{color: "black"}}
                value={query}
                className="peer block min-h-[auto] w-3/5 rounded border-0 bg-white justify-center"
                id="searchTask"
                placeholder="Type to Search Something!"
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
        <ul>
          {todos.map((todo, index) => {
            if (todo.email === session.user.email && todo.complete === false && query !== "" && (todo.body.toLowerCase().includes(query.toLowerCase()) || todo.created.includes(query))) {
              return(
                <li key={todo._id} style={{paddingLeft:15}} className="bg-slate-900 group relative transition-shadow hover:shadow-xl hover:bg-yellow-500 rounded mb-3 mx-10 mt-5">
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

export default SearchItems;
