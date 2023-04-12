import { useRouter } from "next/navigation";
import { useState } from "react";
import { date } from "yup";
import Link from "next/link";
import { useSession } from "next-auth/react";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

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
    <div className="flex justify-center">
        <input
        type="text"
        style={{color: "black"}}
        value={inputText}
        className="peer block min-h-[auto] w-3/5 rounded border-0 bg-white"
        id="addTask"
        placeholder="Add Something!"
        onChange={(e) => setInputText(e.target.value)}
        />
    </div>
    <div className="flex justify-center pt-2">
        <button className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300" type="submit" onClick={() => addTodo(inputText ,router.refresh, session)}>Add ToDo</button>
    </div>
    </>)
}

export default AddNewTodo