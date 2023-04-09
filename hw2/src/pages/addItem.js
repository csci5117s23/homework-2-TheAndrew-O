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
        style={{color: "black"}}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" onClick={() => addTodo(inputText ,router.refresh, session)}>Add ToDo</button>
    </div>
    </>)
}

export default AddNewTodo