
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import ToDoList from './toDoList'
import { useSession, signOut, signIn } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
  const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"
  const {data: session, status} = useSession()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT, {
        'method':'GET',
        'headers': {'x-apikey': API_KEY}
      })
      const data = await response.json()
      // update state -- configured earlier.
      setLoading(false);
    }
    fetchData();
  }, [])

  if(loading){
    return(<span>Loading...</span>)
  }
  else {
    if (session) {
      router.push('/todos')
    }
    else {
      return(<>
      <div>
        <p>Andrew's to-do app</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
      </>)
    }
  }
}
