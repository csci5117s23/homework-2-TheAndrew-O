import { useRouter } from "next/navigation";
import { useState } from "react";
import { date } from "yup";
import Link from "next/link";
import { useSession } from "next-auth/react";

const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"

async function addTodo(inputText, refresh, session){
    const today = new Date();

    await fetch(API_ENDPOINT, {
        'method':'POST',
        'headers': {'x-apikey': API_KEY, 'Content-Type': 'application/json'},
        'body': JSON.stringify({
          'email': session.user.email,
          'body': inputText,
          'complete': false,
          'created' : today.toJSON()
        })
    });
    refresh()
}

const AddNewTodo = () =>{
    const [inputText, setInputText] = useState("")
    const {data: session, status} = useSession()
    const router = useRouter()
    return(<>
    <div>
        <input
        type="text"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
        style={{color: "black"}}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        id="addTaskinput"
        />
        <label
        for="addTaskinput"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Add task
        </label>
        <button type="submit" onClick={() => addTodo(inputText ,router.refresh, session)}>Add ToDo</button>
    </div>
    </>)
}

export default AddNewTodo