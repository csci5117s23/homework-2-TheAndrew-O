import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"


const ToDo = () => {
    const router = useRouter()
    const { query } = router
    const id = query.id
    const [todos, setTodos] = useState([]);
    const {data: session, status} = useSession()
    const param = API_ENDPOINT.concat("?_id=",id)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(param, {
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
            <span><Link href={"/todos"} >Return to ToDo List</Link></span>
                <h1>Details</h1>
                    {todos.map((todo, index) => {
                      return(
                        <div>{todo.body} - {todo.created} - {todo.complete.toString()}</div>
                      );
                  })}
            </div>
        </>);
    }
    else {
        
    }
}

export default ToDo