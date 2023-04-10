import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter as useroute } from "next/navigation";

const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"


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
        <div>
            <span><Link href={"/todos"} >Return to ToDo List</Link></span>
                <h1>Details</h1>
                {todos.map((todo, index) => {
                      return(
                        <div key={todo._id}>
                            { editing ? (
                                <input
                                type="text"
                                style={{color: "black"}}
                                value={text}
                                onChange={handleTextChange}
                                onBlur={() => editTodo(todo._id, text, r.refresh)}
                                />
                            ) : (
                                <p onClick={handleButtonClick}>{todo.body}</p>
                            )}
                            <button onClick={handleButtonClick}>{editing ? 'Save' : 'Edit'}</button>
                        </div>
                      );
                  })}
            </div>
        </>);
    }
    else {
        
    }
}

export default ToDo