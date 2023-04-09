import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import ToDoList from './toDoList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
  const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"
  let POST_ID = "6431f256c54416abf97bc26f"

  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT, {
        'method':'GET',
        'headers': {'x-apikey': API_KEY}
      })
      const data = await response.json()
      // update state -- configured earlier.
      setPosts(data);
      setLoading(false);
    }
    fetchData();
  }, [])

 

  let result = API_ENDPOINT.concat("/",POST_ID)

  const deleteData = async () => {
    const response = await fetch(result, {
      'method':'DELETE',
      'headers': {'x-apikey': API_KEY}
    })
    const data = await response.json()
  }



  if(loading){
    return(<span>hello...</span>)
  }
  else {
    return (<>
    <ToDoList/>
    </>)
  }
}
