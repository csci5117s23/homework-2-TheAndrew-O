import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter as useroute } from "next/navigation";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const API_KEY = process.env.NEXT_PUBLIC_API_KEY


async function editTodo(id, textInput, refresh){
    await fetch(API_ENDPOINT.concat("/",id), {
        'method':'PUT',
        'headers': {'x-apikey': API_KEY, 'Content-Type': 'application/json'},
        'body': JSON.stringify({
          'body': textInput
        })
    });
    refresh()
}

const ToDo = () => {
    const router = useRouter()
    const r = useroute()
    const { query } = router
    const id = query.id
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("")
    const [editing, setEditing] = useState(false)
    const {data: session, status} = useSession()
    const param = API_ENDPOINT.concat("?_id=",id)

    const handleButtonClick = () => {
        setEditing(!editing);
      };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(param, {
                'headers': {'x-apikey': API_KEY}
            });
            const data = await response.json();
            setTodos(data);
            setText(data.body)
        };
        fetchData();
    }, []);

   
    // const editTodo = async () => {
    //      const res = await fetch(API_ENDPOINT.concat("/",id), {
    //         'method':'PUT',
    //         'headers': {'x-apikey': API_KEY, 'Content-Type': 'application/json'},
    //         'body': JSON.stringify({
    //           'body': event.target.value
    //         })
    //     });
    //     const dat = await res.json()
    //     setTodos(dat)
    // }

    useEffect(() => {
        if(!session) {
          router.push("/")
        }
    }, [session, router])

    const handleTextChange = (event) => {
        setText(event.target.value);
      };
    
    if(session){
        return (<>
        <Navbar tab={2}/>
        <div className="justify-center text-center">
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block m-8">
                <span class="relative text-white">Task Description</span>
            </span>
                {todos.map((todo, index) => {
                      return(<>
                        <div key={todo._id} className="justify-center text-center">
                            { editing ? (
                                <input
                                type="text"
                                style={{color: "black"}}
                                value={text}
                                className="min-h-[auto] h-auto w-3/5 rounded border-0 justify-center"
                                placeholder={todo.body}
                                onChange={handleTextChange}
                                onBlur={() => editTodo(todo._id, text, r.refresh)}
                                />
                            ) : (
                                <p onClick={handleButtonClick}>{todo.body} - &nbsp;
                                <span class="before:block before:absolute before:-inset-1 before:-skew-y-0 before:bg-pink-500 relative inline-block">
                                    <span class="relative text-white">Created on: {todo.created.substring(0, 10)}</span>
                                </span></p>
                            )}
                        </div>
                        <div className="space-x-4">
                            <button className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 mt-4" onClick={handleButtonClick}>{editing ? 'Save' : 'Edit'}</button>
                            <Link className="py-2 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300" href={"/todos"}>Cancel</Link>
                        </div>
                      </>);
                  })}
            </div>
            <div className="backparticles"><ParticleBackground/></div>
        </>);
    }
    else {
        
    }
}

export default ToDo