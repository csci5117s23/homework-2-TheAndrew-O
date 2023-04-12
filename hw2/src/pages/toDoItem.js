import Link from "next/link";
import { useRouter } from "next/navigation";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

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
    if(!task){
        return null
    }
    const id_param = "/todo?id=".concat(task._id)
    return(<>
    <div className="max-w-sm max-h-2/5 md:max-w-full justify-center">
        <div className="inline-flex items-center">
        <label
            class="relative flex cursor-pointer items-center rounded-full p-3"
            for="checkbox"
            data-ripple-dark="true">
            <input className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-700 checked:bg-green-700 checked:before:bg-green-700 hover:before:opacity-10" type="checkbox" onChange={() => completeTodo(task._id, task.complete, router.refresh)} checked={task.complete}/>
            <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
            >
                <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
                ></path>
            </svg>
            </div>
        </label>
        </div>
        <span className="px-3">Mark as Completed</span>
        <div className="truncate mb-2">
            <span className="text-white">{task.created.substring(0,10)} - {task.body}</span>
        </div>
        {task.complete ? null : <Link href={id_param} className="px-10 hover:text-neutral-800">View Task</Link>}
        <button onClick={() => deleteTodo(task._id, router.refresh)} className="px-10 hover:text-red-600">Delete</button>
    </div>
    </>)
}

export default ToDoItem