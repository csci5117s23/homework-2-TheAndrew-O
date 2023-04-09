import Link from "next/link";
import { useRouter } from "next/navigation";

const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"

async function completeTodo(id, isDone, refresh){
    await fetch(API_ENDPOINT.concat("/",id), {
        'method':'PUT',
        'headers': {'x-apikey': API_KEY, 'Content-Type': 'application/json'},
        'body': JSON.stringify({
          'complete': (!isDone)
        })
    });
    refresh()
}

async function deleteTodo(id, refresh) {
    await fetch(API_ENDPOINT.concat("/",id), {
        'method':'DELETE',
        'headers': {'x-apikey': API_KEY},
    });
    refresh()
}

const ToDoItem = ({task}) => {

    const router = useRouter();
    const id_param = "/todo?id=".concat(task._id)
    return(<>
    <input type="checkbox" onChange={() => completeTodo(task._id, task.complete, router.refresh)} checked={task.complete}/>
    <span style={{padding:10}}>{task.body}, {task.complete.toString()}</span>
    <Link href={id_param} style={{padding: 5}}>View Task</Link>
    <button onClick={() => deleteTodo(task._id, router.refresh)}>Delete</button>
    </>)
}

export default ToDoItem